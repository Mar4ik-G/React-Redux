const initialState = {
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
}

export const newsReducer = (state = initialState,action) => {
            return state;
}

export default newsReducer;