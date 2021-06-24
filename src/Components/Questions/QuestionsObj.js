const questionsObjs = [
  {
    id: 0,
    question: "¿ React es un FrameWork ?",
    text: "React es un codigo abierto front-end JavaScript (FrameWork o Library) que es usado para construir interfaces especializado para single page aplications and mucho mas!",
    option: false,
    optionTwo: true,
    awnser:
      "React es una liberia que es usada para construir interfaces especializado para single page aplications y mucho mas!",
  },
  {
    id: 1,
    question: "¿ React solo se puede escribir con JavaScript ?",
    text: "Como sabemos Ract es una libreria de Javascript, pero solo se pude codear con ese lenguaje ?",
    option: false,
    optionTwo: true,
    awnser:
      "No, React se puede escribir con varios lenguajes entre ellos Javascript o Typescript",
  },
  {
    id: 2,
    question: "¿ Es lo mimo utilizar .js que .jsx ?",
    text: "Como sabemos en la actualidad se puede escribir codigo react en archivos .js como en .jsx pero es lo mismo?",
    option: false,
    optionTwo: true,
    awnser:
      "Si y no, ambos funcionan pero los archivos .jsx tienen mejor rendimiento",
  },
  {
    id: 3,
    question:
      '¿ Existe alguna diferencia entre un "componente" y un "elemento" ?',
    text: "",
    option: true,
    optionTwo: false,
    awnser:
      "Sí, Un componente de React acepta entradas y devuelve el elemento, lo cual es simplemente una descripción de lo que puedes ver en pantalla.",
  },
  {
    id: 4,
    question: "¿ Los exploradores web pueden leer JSX ?",
    text: "Los exploradores web están configurados de cierta manera que solo son capaces de leer objetos JavaScript. Aunque similares, un objeto JSX no es lo mismo a un objeto JS. Entonces los exploradores web pueden leerlos?",
    option: false,
    optionTwo: true,
    awnser:
      "No, no pueden. Los exploradores web están configurados de cierta manera que solo son capaces de leer objetos JavaScript. Aunque similares, un objeto JSX no es lo mismo a un objeto JS.",
  },
  {
    id: 5,
    question:
      "¿ React Native esta mas orientada al desarrollo de apps para movil ?",
    text: "Como sabemos ReactJS y React Native no son lo mismo, pero entonces para que fue creada?",
    option: true,
    optionTwo: false,
    awnser:
      "React Native es un framework JavaScript para crear aplicaciones reales nativas para iOS y Android, basado en la librearía de JavaScript React para la creación de componentes visuales.",
  },
  {
    id: 6,
    question: "¿ Las Props son inputs de los componentes ?",
    text: "Son valores únicos u objetos que contienen un conjunto de valores que se pasan a los componentes.",
    option: true,
    optionTwo: false,
    awnser: "Sí, Las Props son inputs de los componentes.",
  },
  {
    id: 7,
    question:
      " En un button ¿ Es lo mismo escribir onclick='funcionUno()' que onClick={funcionUno()}?",
    text: "",
    option: false,
    optionTwo: true,
    awnser:
      "No, React crea un DOM virtual, por ende utiliza otra manera de escribir codigo HTML.",
  },
  {
    id: 8,
    question: "¿ Las key prop tiene algun beneficio cuando se le agregan ?",
    text: "Generalmente cuando se realiza un .map de un array, sale un warning sobre que es necesario la key. Entonces crees que tiene algun beneficio el agregarlo?",
    option: true,
    optionTwo: false,
    awnser:
      "El beneficio princial es que mejor el rendimiento al rederizar la web.",
  },
  {
    id: 9,
    question: "¿ Los Hooks solo se puden usar componentes de funciones ?",
    text: "Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir en una ...",
    option: true,
    optionTwo: false,
    awnser: "Sí, Los Hooks solo se puden usar componentes de funciones.",
  },
];

export default questionsObjs;
