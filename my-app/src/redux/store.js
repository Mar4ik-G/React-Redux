import profileReducer from "./Reducer/profile-reducer";
import dialogsReducer from "./Reducer/dialogs-reducer";


const store={
    _callSubscriber(){
        console.log('state')
    },
    _state:{
        profile: {
            messagesData: [
                {like: 13, message: 'Mark', id: '1'},
                {like: 21, message: 'Where are you from?', id: '2'},
                {like: 41, message: 'name Mark', id: '3'},
                {like: 15, message: 'Hi my name Mark', id: '4'},
                {like: 23, message: 'Where are you from?', id: '5'},
                {like: 54, message: 'Hi my name Mark', id: '6'},
            ],
            controllInput:'something',
        },
        messages: {
            messageData: [
                {message: 'Mark', id: '1'},
                {message: 'Andrey', id: '2'},
                {message: 'Oleg', id: '3'},
                {message: 'Dima', id: '4'},
                {message: 'Mark', id: '5'},
                {message: 'Oleg', id: '6'},
            ],
            dialogsItem: [
                {name: 'Mark', id: '1'},
                {name: 'Andrey', id: '2'},
                {name: 'Oleg', id: '3'},
                {name: 'Dima', id: '4'},
                {name: 'Mark', id: '5'},
                {name: 'Oleg', id: '6'},
            ],
            controllInputForDialogs:'something',
        },
        news: [
            {
                id: 1,
                header: "Зеленський доручив скасувати дозволи на пересування військовозобов'язаних?",
                text: "Президент Володимир Зеленський доручив головнокомандувачу Збройних сил України  скасувати порядок отримання військовозобов’язаними дозволів на переміщення."
            },
            {
                id: 2,
                header: "Queensberry rules — стандартные правила вежливого или приемлемого поведения",
                text: "It was ensured by the police that both the parties adhered to the Queensberry rules during their hearing session in the high court."
            },
            {
                id: 3,
                header: "ЗСУ відбили наступ окупантів поблизу Долини та Спірного: ранкове зведення Генштабу станом на 6 липня?",
                text: "На Волинському та Поліському напрямках ситуація без суттєвих змін. Ознак формування наступальних угруповань противника на території Республіки Білорусь не виявлено."
            },
            {
                id: 4,
                header: "Як обрізати довгі тексти тільки за допомоги CSS",
                text: "Часто буває так, що на сторінці є великий шматок тексту, який потрібно обрізати. Використання overflow: hidden не завжди допоможе, адже текст може обрізатись навіть посередині букви."
            },
            {id: 5, header: "ХТО?", text: "lorem"},
        ]
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profile = profileReducer(this._state.profile,action)
        this._state.messages = dialogsReducer(this._state.messages,action)
        this._callSubscriber( this._state);
    },
}

export default store;










