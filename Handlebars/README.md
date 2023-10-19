##Installation

There are a variety of ways to install Handlebars, depending on the programming language and environment you are using.
'''
npm or yarn (recommended)
'''
The reference implementation of Handlebars is written in JavaScript. It is most commonly installed using npm or yarn:
'''
npm install handlebars
'''
or
'''
yarn add handlebars
'''
You can then use Handlebars by importing it:
'''
import Handlebars from "handlebars";
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));
'''
If you are using Handlebars in a CommonJS environment, you can use require:
'''
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));
'''
