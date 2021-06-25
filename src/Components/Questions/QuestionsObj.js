const questionsObjs = [
  {
    id: 0,
    question: "¿ React es un FrameWork ?",
    text: "React es un código abierto front-end JavaScript (FrameWork o Library) que es usado para construir interfaces especializado para single page aplications and mucho mas!",
    option: false,
    optionTwo: true,
    awnser:
      "React es una librería que es usada para construir interfaces especializado para single page aplications y mucho mas!",
  },
  {
    id: 1,
    question: "¿ React solo se puede escribir con JavaScript ?",
    text: "Como sabemos Ract es una librería de Javascript, pero solo se pude codear con ese lenguaje ?",
    option: false,
    optionTwo: true,
    awnser:
      "React se puede escribir con varios lenguajes entre ellos Javascript o Typescript",
  },
  {
    id: 2,
    question: "¿ Es lo mismo utilizar .js que .jsx ?",
    text: "Como sabemos en la actualidad se puede escribir código react en archivos .js como en .jsx pero es lo mismo?",
    option: false,
    optionTwo: true,
    awnser: "Ambos funcionan pero los archivos .jsx tienen mejor rendimiento",
  },
  {
    id: 3,
    question:
      '¿ Existe alguna diferencia entre un "componente" y un "elemento" ?',
    text: "Como sabemos en react existen los componentes y a su vez los elemento ¿Pero son lo mismo o están relacionados?",
    option: true,
    optionTwo: false,
    awnser:
      "Un componente de React acepta entradas y devuelve el elemento, lo cual es simplemente una descripción de lo que puedes ver en pantalla.",
  },
  {
    id: 4,
    question: "¿ Los exploradores web pueden leer JSX ?",
    text: "Los exploradores web están configurados de cierta manera que solo son capaces de leer objetos JavaScript. Aunque similares, un objeto JSX no es lo mismo a un objeto JS. Entonces los exploradores web pueden leerlos?",
    option: false,
    optionTwo: true,
    awnser:
      "Los exploradores web están configurados de cierta manera que solo son capaces de leer objetos JavaScript. Aunque similares, un objeto JSX no es lo mismo a un objeto JS.",
  },
  {
    id: 5,
    question:
      "¿ React Native esta mas orientada al desarrollo de apps para móvil ?",
    text: "Como sabemos ReactJS y React Native no son lo mismo, ¿Pero entonces para que fue creada?",
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
    awnser: "Las Props son inputs de los componentes.",
  },
  {
    id: 7,
    question: "¿ Un DOM real es lo mismo que el DOM virtual de React ? ",
    text: "Como sabemos React crea un Dom virtual, ¿Pero es lo mismo a un DOM tradicional?",
    option: false,
    optionTwo: true,
    awnser:
      'Brindar y utilizar un "DOM virtual" en React, usualmente se convierte en una de sus principales ventajas cuando hablamos acerca de esta librería JavaScript y además el DOM virtual es mucho más rápido y económico que el real.',
  },
  {
    id: 8,
    question: "¿ Las key prop tiene algún beneficio cuando se le agregan ?",
    text: "Generalmente cuando se realiza un .map de un array, sale un warning sobre que es necesario la key. Entonces crees que tiene algún beneficio el agregarlo?",
    option: true,
    optionTwo: false,
    awnser:
      "El beneficio principal es que mejor el rendimiento al renderizar la web.",
  },
  {
    id: 9,
    question: "¿ Los Hooks solo se pueden usar componentes de funciones ?",
    text: "Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir en una ...",
    option: true,
    optionTwo: false,
    awnser: "Los Hooks solo se pueden usar componentes de funciones.",
  },
  {
    id: 10,
    question:
      " En un button ¿ Es lo mismo escribir onclick='funcionUno()' que   onClick={funcionUno()?",
    text: "Como sabemos React crea un DOM virtual, ¿Pero los eventos se escriben igual?",
    option: false,
    optionTwo: true,
    awnser:
      "React crea un DOM virtual, por ende utiliza otra manera de escribir código HTML.",
  },
  {
    id: 11,
    question:
      "¿ Los comentarios en React se codean de la misma manera que en JavaScript ?",
    text: "Ya sabemos de la diferencias entre el DOOM virtual y el DOM real pero los comentarios se escriben de la misma manera ?  Ejemplo: // Hola  ?",
    option: false,
    optionTwo: true,
    awnser:
      "Los comentarios se escriben de la siguiente manera {/* hola */} ya que estamos utilizando el DOM virtual",
  },
  {
    id: 12,
    question:
      "¿ Cuando creamos un componente debemos colocar la primera letra en Mayúscula ?",
    text: "Cuando se crea un nuevo componente ¿Si o si debe llevar su primera letra mayúscula?",
    option: true,
    optionTwo: false,
    awnser:
      "Si está renderizando su componente usando JSX, el nombre de ese componente debe comenzar con una letra mayúscula; de lo contrario, React arrojará un error como etiqueta no reconocida.",
  },
  {
    id: 13,
    question: "¿ En los componentes de funciones se debe escribir render() ?",
    text: "Como sabemos en React se pude escribir de dos maneras los componentes,  como funciones o como clases. Ambos son similares pero se escriben de diferentes maneras.",
    option: false,
    optionTwo: true,
    awnser:
      "No, el render() solo se debe escribir en los componentes de clases al final, para que renderice todo el código",
  },
  {
    id: 14,
    question:
      "¿ La manera correcta de definir un style en una linea en React es <div style={{ max-height: 10 }}> ?",
    text: "React crea un DOM virtual, por ende utiliza otra manera de escribir código  HTML hasta incluso los styles, ¿ Pero esta bien escrito ese div?",
    option: false,
    optionTwo: true,
    awnser:
      "La manera correcta de escribir los style es diferente a la normal, y en este caso es la siguiente <div style={{ maxHeight: 10 }}> ",
  },
  {
    id: 15,
    question:
      "¿ Los Hooks en React vinieron a resolver el ciclo de vida de los eventos en los componentes de funciones?",
    text: "Los Hooks vinieron a React a resolver muchos problemas que los componentes de funciones no tenían a comparación de los componentes de clase, ¿Pero vinieron a resolver el ciclo de vida de los eventos?  ",
    option: true,
    optionTwo: false,
    awnser:
      "Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función",
  },
  {
    id: 16,
    question: "¿ Uno puede crear sus propios Hooks ?",
    text: "Como sabemos en React existen hooks ¿ Pero nosotros podemos crear hooks propios ?",
    option: true,
    optionTwo: false,
    awnser:
      "Los Hooks personalizados son más una convención que una funcionalidad. Si el nombre de una función comienza con ”use” y llama a otros Hooks, decimos que es un Hook personalizado.",
  },
  {
    id: 17,
    question: "¿ Funcionan los Hooks con tipado estático ?",
    text: "Como sabemos en React nosotros podemos en diferentes lenguajes ¿Pero podemos usarlo con lenguajes de tipado estático?",
    option: true,
    optionTwo: false,
    awnser:
      "Los Hooks fueron diseñados con el tipado estático en mente. Al ser funciones, son más fáciles de tipar que patrones como los componentes de orden superior.",
  },
  {
    id: 18,
    question: "¿ En el Hook useEffect, puede ser ejecutado muchas veces ?",
    text: " El hook useEffect se ejecutará después de que el renderizado es confirmado en la pantalla. ¿ Pero se podrá  llamar nuevamente?",
    option: true,
    optionTwo: false,
    awnser:
      "Si quieres ejecutar un efecto y sanearlo solamente una vez (al montar y desmontar), puedes pasar un array vacío ([]) como segundo argumento",
  },
  {
    id: 19,
    question:
      "¿ Son los hooks lentos debido a la creación de funciones en el render ?",
    text: "  Las preocupaciones de desempeño alrededor de funciones inline en React han estado relacionadas con como al pasar nuevos callbacks en cada renderizado rompe optimizaciones con shouldComponentUpdate en los componentes hijos.",
    option: false,
    optionTwo: true,
    awnser:
      "No. en los navegadores modernos, el desempeño de los closures comparado con el de las clases no difiere de manera significativa, exceptuando casos extremos.",
  },
];

export default questionsObjs;
