const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Coding Mindset" },
    { name: "Computer Science" },
    { name: "HTML & CSS" },
    { name: "Advanced CSS" },
    { name: "JavaScript" },
    { name: "APIs" },
    { name: "Node & Express" },
    { name: "SQL & NoSQL" },
    { name: "React" },
    { name: "Full Stack" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "100 Days of Code",
      description: "A Daily Journal",
      image: "MENTALITY-coding-journal.jpg",
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
    },
    {
      name: "The Pragmatic Programmer",
      description: "Your Journey to Mastery",
      image: "MENTALITY-the-pragmatic-programmer.jpg",
      category: categories[0]._id,
      price: 1.99,
      quantity: 500,
    },
    {
      name: "The Self-Taught Programmer",
      category: categories[0]._id,
      description: "The Definitive Guide to Programming Professionally",
      image: "MENTALITY-the-self-taught-programmer.jpg",
      price: 7.99,
      quantity: 20,
    },
    {
      name: "The Unicorn Project",
      category: categories[0]._id,
      description:
        "A Novel about Developers, Digital Disruption, and Thriving in the Age of Data",
      image: "MENTALITY-the-unicorn-project.jpg",
      price: 3.99,
      quantity: 50,
    },
    {
      name: "Think Like a Programmer",
      category: categories[0]._id,
      description: "An Introduction to Creative Problem Solving",
      image: "MENTALITY-think-like-a-programmer.jpg",
      price: 14.99,
      quantity: 100,
    },
    {
      name: "Cambridge IGCSE Computer Science",
      category: categories[1]._id,
      description: "Programming Book for Microsoft Visual Basic",
      image: "cambridge.jpg",
      price: 399.99,
      quantity: 30,
    },
    {
      name: "Everything You Need to Ace Computer Science and Coding In One Big Fat Book",
      category: categories[1]._id,
      description: "The Complete Middle School Study Guide",
      image: "COMPUTER-SCIENCE-everything-you-need-to-ace.jpg",
      price: 199.99,
      quantity: 30,
    },
    {
      name: "A Programmer's Guide to Computer Science",
      category: categories[1]._id,
      description: "A Virtual Degree for the Self-Taught Developer",
      image: "COMPUTER-SCIENCE-programmers-guide-to-computer-science.jpg",
      price: 9.99,
      quantity: 100,
    },
    {
      name: "Programming Machine Learning",
      category: categories[1]._id,
      description: "From Coding to Deep Learning",
      image: "COMPUTER-SCIENCE-programming-machine-learning.jpg",
      price: 1.99,
      quantity: 1000,
    },
    {
      name: "Programming the Universe",
      category: categories[1]._id,
      description: "A Quantum Computer Scientist Takes On The Cosmos",
      image: "COMPUTER-SCIENCE-programming-the-universe.jpg",
      price: 2.99,
      quantity: 1000,
    },
    {
      name: "HTML5 and CSS3 All-In-One For Dummies",
      category: categories[2]._id,
      description: "8 Books in 1",
      image: "HTML-CSS-html-css-for-dummies.jpeg",
      price: 7.99,
      quantity: 100,
    },
    {
      name: "HTML & CSS",
      category: categories[2]._id,
      description: "Design and Build Websites",
      image: "HTML-CSS-HTML&CSS-design.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Learn to Code HTML & CSS",
      category: categories[2]._id,
      description: "Develop & Style Websites",
      image: "HTML-CSS-learn-to-code-html-css.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Responsive Web Design with HTML 5 & CSS",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "HTML-CSS-responsive-web-design.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "CSS In Depth",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "ADVANCED-CSS-css-in-depth.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "CSS Master Third Edition",
      category: categories[3]._id,
      description: "Organized. Efficient. Powerful-CSS Done Right!",
      image: "ADVANCED-CSS-css-master.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "CSS The Definitive Edition",
      category: categories[3]._id,
      description: "Visual Presentation For The Web",
      image: "ADVANCED-CSS-css-the-definitive-guide.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Modern CSS",
      category: categories[3]._id,
      description: "Master the Key Concepts of CSS for Modern Web Development",
      image: "ADVANCED-CSS-modern-css.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Pro CSS Techniques",
      category: categories[3]._id,
      description: "Real-World CSS Techniques for Real-World CSS Professionals",
      image: "ADVANCED-CSS-pro-css-techniques.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Coding with JavaScript for Dummies",
      category: categories[4]._id,
      description:
        "Go From No Coding Experience to Knowing Your Way Around With JavaScript",
      image: "JAVASCRIPT-coding-javascript-for-dummies.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Eloquent JavaScript Third Edition",
      category: categories[4]._id,
      description: "A modern Introduction to Programming",
      image: "JAVASCRIPT-eloquent-javascript.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "JavaScript from Beginner to Professional",
      category: categories[4]._id,
      description:
        "Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages",
      image: "JAVASCRIPT-JavaScript-from-beginner-to-professional.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "JavaScript The Comprehensive Guide",
      category: categories[4]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "JAVASCRIPT-JavaScript-the-comprehensive-guide.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "JavaScript The Definitive Guide",
      category: categories[4]._id,
      description: "Master The World's Most-Used Programming Language",
      image: "JAVASCRIPT-JavaScript-the-definitive-guide.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "API Fundamentals: An Easy Hands on Workbook for Beginners",
      category: categories[5]._id,
      description: "For Product Managers & Everyone Else",
      image: "APIS-api-fundamentals.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "APIs",
      category: categories[5]._id,
      description: "A Strategy Guide",
      image: "APIS-apis-a-strategy-guide.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Build APIs You Won't Hate",
      category: categories[5]._id,
      description:
        "Everyone and Their Dog Wants an API, So You Should Probably Learn How to Build One",
      image: "APIS-build-apis-you-wont-hate.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Mastering API Architecture",
      category: categories[5]._id,
      description: "Design, Operate, and Evolve API-Based Systems",
      image: "APIS-mastering-api-architecture.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Beginning Node,js, Express & MongoDB Development",
      category: categories[6]._id,
      description: "node.js, express mongoDB",
      image: "NODE-EXPRESS-beginning-nodejs-express-mongodb.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Express in Action",
      category: categories[6]._id,
      description: "Writing, building, and testing Node.js applications",
      image: "NODE-EXPRESS-express-in-action.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Get Programming with Node.js",
      category: categories[6]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "NODE-EXPRESS-get-programming-with-nodejs.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Node.js Easy Exercises",
      category: categories[6]._id,
      description: "Simple Page Navigation with Express",
      image: "NODE-EXPRESS-node.js-easy-exercises.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Web Development with Node & Express",
      category: categories[6]._id,
      description: "Leveraging The JavaScript Stack",
      image: "NODE-EXPRESS-web-dev-with-node-express-1st-edition.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Learn SQL DataBase Programming",
      category: categories[7]._id,
      description:
        "Query and manipulate databases from popular relational database servers using SQL",
      image: "SQL-NOSQL-learn-sql-db-programming.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "NoSQL AND SQL Data Modeling",
      category: categories[7]._id,
      description: "Bringing Together Data, Semantics, and Software",
      image: "SQL-NOSQL-nosql-sql-data-modeling.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Practice SQL",
      category: categories[7]._id,
      description: "A Beginner;s Guide To Storytelling With Data",
      image: "SQL-NOSQL-practical-sql.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "SQL For Smarties",
      category: categories[7]._id,
      description: "Advanced SQL Programming",
      image: "SQL-NOSQL-sql-for-smarties.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "SQL and NoSQL Databases",
      category: categories[7]._id,
      description:
        "Models, Languages, Consistency Options and Architectures for Big Data Management",
      image: "SQL-NOSQL-sql-nosql-databases.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Full Stack React",
      category: categories[8]._id,
      description: "The Complete Guide to ReactJS and Friends",
      image: "REACT-fullstack-react.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Learning React",
      category: categories[8]._id,
      description: "Modern Patterns for Developing React Apps",
      image: "REACT-learning-react.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      category: categories[8]._id,
      name: "React Design Patterns and Best Practices",
      description:
        "Design, build and deploy production-ready web applications using standard industry practices",
      image: "REACT-react-design-patterns-best-practices.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "React Explained",
      category: categories[8]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "REACT-react-explained.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "The Road to React",
      category: categories[8]._id,
      description: "2023 Edition with React 18 and React Hooks",
      image: "REACT-the-road-to-react.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Full Stack Web Development For Beginners",
      category: categories[9]._id,
      description: "HTML, CSS, Bootstrap, JavaScript, PHP, MySQL",
      image: "FULL-STACK-fs-web-development-for-beginners.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Full Stack Web Development",
      category: categories[9]._id,
      description:
        "Everything Beginners to Expert Guide on Modern Full-Stack Web Development Using Modern Web Development Tools",
      image: "FULL-STACK-full-stack-web-development.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Full Stack Rust",
      category: categories[9]._id,
      description:
        "The Complete Guide to Building Apps with the Rust Programming Language and Friends",
      image: "FULL-STACK-fullstack-rust.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "Modern Full-Stack Development",
      category: categories[9]._id,
      description: "Using TypeScript, React, Node.js, Webpack and Docker",
      image: "FULL-STACK-modern-fs-development.jpg",
      price: 9.99,
      quantity: 600,
    },
    {
      name: "The Full Stack Developer",
      category: categories[9]._id,
      description:
        "Your Essential Guide to the Everyday Skills Expected of a Modern Full Stack Web Developer",
      image: "FULL-STACK-the-fs-developer.jpg",
      price: 9.99,
      quantity: 600,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
