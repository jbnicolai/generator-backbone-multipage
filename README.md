# generator-backbone-multipage [![Build Status](https://secure.travis-ci.org/cgetc/generator-backbone-multipage.png?branch=master)](https://travis-ci.org/cgetc/generator-backbone-multipage)

> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-backbone-multipage from npm, run:

```
$ npm install -g generator-backbone-multipage
```

Finally, initiate the generator:

```
$ yo backbone-multipage
```

### Usage ###
To setup development environment, run:

```
$ grunt
```

To setup production environment, run:
```
$ grunt build
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

### Updates
## 0.0.3
* Reviced not to include requirejs and use data-main.

## 0.0.2
* Reviced template files' extension from .html to .ejs.
* Add JST options to prepend to use with statement.

### See Also (In Japanese)

[Multipage版のBackbone Yoman Generatorを公開しました](http://qiita.com/cgetc@github/items/d826eeedf245ae2d6cb0)

## License

MIT
