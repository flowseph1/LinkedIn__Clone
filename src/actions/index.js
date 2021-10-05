import { auth, provider, storage } from "../Firebase";
import db from "../Firebase";
import {
    SET_USER,
    SET_LOADING_STATUS,
    GET_ARTICLES,
    GET_LOADING_STATUS,
} from "./actionType";

export const setUser = payload => ({
    type: SET_USER,
    user: payload,
});

export const setLoading = status => ({
    type: SET_LOADING_STATUS,
    status: status,
});

export const getArticles = payload => ({
    type: GET_ARTICLES,
    payload: payload,
});

export const getLoadingStatus = payload => ({
    type: GET_LOADING_STATUS,
    payload: payload,
});

export function signInAPI() {
    return dispatch => {
        auth.signInWithPopup(provider)
            .then(payload => {
                dispatch(setUser(payload.user));
            })
            .catch(error => {
                console.error(error);
            });
    };
}

export function getUserAuth() {
    return dispatch => {
        auth.onAuthStateChanged(async user => {
            user && dispatch(setUser(user));
        });
    };
}

export function signOut() {
    return dispatch => {
        auth.signOut()
            .then(() => {
                dispatch(setUser(null));
            })
            .catch(err => {
                console.error(err.message);
            });
    };
}

export function postArticleAPI(payload) {
    return dispatch => {
        dispatch(
            setLoading({
                status: true,
                mediaType: payload.image
                    ? "image"
                    : payload.video
                    ? "video"
                    : "text",
            })
        );
        if (payload.image !== "") {
            const upload = storage
                .ref(`images/${payload.image.name}`)
                .put(payload.image);

            upload.on(
                "state_changed",

                snapshot => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                    console.log(`Progress: ${progress}%`);
                    if (snapshot.state === "RUNNING") {
                        console.log(`Progress: ${progress}%`);
                    }
                },
                err => console.log(err.code),
                async () => {
                    const downloadURL =
                        await upload.snapshot.ref.getDownloadURL();
                    db.collection("articles").add({
                        actor: {
                            description: payload.user.email,
                            tittle: payload.user.displayName,
                            date: payload.timestamp,
                            image: payload.user.photoURL,
                        },
                        video: payload.video,
                        sharedImg: downloadURL,
                        comments: 0,
                        description: payload.description,
                    });
                    dispatch(
                        setLoading({
                            status: false,
                            mediaType: "",
                        })
                    );
                }
            );
        } else if (payload.video !== "") {
            const upload = storage
                .ref(`videos/${payload.video.name}`)
                .put(payload.video);

            upload.on(
                "state_changed",

                snapshot => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                    dispatch(getLoadingStatus(progress));
                    if (snapshot.state === "RUNNING") {
                        dispatch(getLoadingStatus(progress));
                    }
                },
                err => console.log(err.code),
                async () => {
                    const downloadURL =
                        await upload.snapshot.ref.getDownloadURL();
                    db.collection("articles").add({
                        actor: {
                            description: payload.user.email,
                            tittle: payload.user.displayName,
                            date: payload.timestamp,
                            image: payload.user.photoURL,
                        },
                        sharedVideo: downloadURL,
                        comments: 0,
                        description: payload.description,
                    });
                    dispatch(
                        setLoading({
                            status: false,
                            mediaType: "",
                        })
                    );
                }
            );
        } else if (payload.description !== "") {
            db.collection("articles").add({
                actor: {
                    description: payload.user.email,
                    tittle: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                comments: 0,
                description: payload.description,
            });
        }
    };
}

export function getArticlesAPI() {
    return dispatch => {
        let payload;

        db.collection("articles")
            .orderBy("actor.date", "desc")
            .onSnapshot(snapshot => {
                payload = snapshot.docs.map(doc => doc.data());
                dispatch(getArticles(payload));
            });
    };
}
