module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends":
        "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-undef": 2,
        "no-unused-vars": 2,
        "quotes": [2, "double"],
        "no-var" : 2,

        "space-before-function-paren" : [2, "never"],//function 다음 중괄호 띄어쓰기 x
        "comma-spacing" : 2,// comma 다음 space 필수
        "brace-style" : 2,// 중괄호 같은 라인
        "no-whitespace-before-property" : 2, // 객체와 속성사이의 공백 허용하지 않음
        "indent" : 2, // 들여쓰기 4spaces (tab)
        "space-in-parens" : 2, // ( pow(x,y) )
        "no-extra-semi" : 2, // 불필요한 세미콜론 허용안함
        "keyword-spacing": [2, {"overrides": {
            "if": {"after": false},
            "for": {"after": false},
            "while": {"after": false}  //if, for, while 후 소괄호 붙여서 사용해야함
        }}],
        "space-infix-ops": 2, // 이항연산자 띄어쓰기 불가
        "space-unary-ops": 2, // 단항연산자 띄어쓰기 불가
        "operator-linebreak": 2, // 연산 중 줄바꿈 불가
        "semi": 2, // 세미콜론 없을 시 에러
        "space-before-blocks": 2, // () {} 소괄호 다음 중괄호 띄우기
        "padding-line-between-statements": [2, 
            { blankLine: "always", prev: "block-like", next: "*" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}], // logical block 사이 한 칸 띄우기
        "spaced-comment" : [2, "always"],
        "new-cap" : 2, //생성자 이름은 대문자로 시작해야합니다
        "no-multi-spaces" : 2
    }
        //"newlinee-before-return" : 2, return전에는 한 줄 띄기
        //"new-parens" : 2, 인수가 없는 생성자는 괄호로 호출해야합니다.
};