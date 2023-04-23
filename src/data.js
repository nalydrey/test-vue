const questionsList = [
    {
        name: 'sex',
        image: null,
        listType: 'text',
        question: 'Ваш пол',
        variants: ['мужчина', 'женщина'],
        myVariant: ''
    },
    {
        name: 'age',
        listType: 'text',
        image: null,
        question: 'Укажите Ваш возраст',
        variants: ['До 18', 'От 18 до 28', 'от 29 до 35', 'от 36'],
        myVariant: ''
    },
    {
        name: 'home',
        listType: 'text',
        image: null,
        question: 'Выберете лишнее',
        variants: ['дом', 'шалаш', 'бунгало', 'скамейка', 'хижина'],
        myVariant: ''
    },
    {
        name: 'count',
        listType: 'text',
        image: null,
        question: 'Продолжите числовой ряд',
        variants: ['62', '48', '74', '57', '60', '77'],
        myVariant: ''
    },
    {
        name: 'nowColor',
        listType: 'color',
        image: null,
        question: 'Выберете цвет, который сейчас наииболее Вам приятен',
        variants: ['gray', 'blue', 'green', 'red', 'yellow', 'brown', 'black', 'purple', 'lightBlue'],
        myVariant: ''
    },
    {
        name: 'laterColor',
        listType: 'color',
        image: null,
        question: 'Отдохните пару секунд, еще раз выберете цвет который сейчас наиболее Вам приятен',
        variants: ['gray', 'lightBlue', 'brown', 'green', 'black', 'red', 'purple', 'yellow', 'blue'],
        myVariant: ''
    },
    {
        name: 'town',
        listType: 'text',
        image: null,
        question: 'Какой из городов лишний',
        variants: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'],
        myVariant: ''
    },
    {
        name: 'figure',
        listType: 'number',
        image: 'figure.jpg',
        question: 'Выберете правильную фигуру',
        variants: ['1', '2', '3', '4'],
        myVariant: ''
    },
    {
        name: 'moreImportant',
        listType: 'text',
        image: null,
        question: 'Вам привычнее и важнее',
        variants: ['Наслаждаться каждой минутой проведенного выемени', 'Быть устремленными мыслями в будущее', 'Учитывать в ежедневной практике прошлый опыт'],
        myVariant: ''
    },
    {
        name: 'definition',
        listType: 'text',
        image: 'piramida.jpg',
        question: 'Какое определение по-Вашему, больше подходит к этому геометрическому изображению ',
        variants: ['Оно остроконечное', 'Оно устойчиво', 'Оно находится в состоянии равновесия'],
        myVariant: ''
    },
    {
        name: 'fit',
        listType: 'number',
        image: 'star.jpg',
        question: 'Вставьте подходящее число',
        variants: ['34', '36', '53', '44', '66', '42'],
        myVariant: ''
    },
]

export default questionsList