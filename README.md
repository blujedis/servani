# Servani

Simply a wrapper which allows starting the web server of your choice. Either a node http server, php server or python server.

No library is contained. As such there's no need to ever install this lib locally. You should only install globally.

## Getting Started

Install globally using Npm or Yarn.

```sh
yarn global add servani
```

OR

```sh
npm install servani -g
```

## Serving a Directory

Servani handles three global options/arguments. The host, port and mount or path to serve. All other options are passed to the underlying command.

**Serving the current directory with Node**

```sh
servani
```

**With Python or PHP**

```sh
servani php
```

```sh
servani py3
```

## Setting Host, Port and Directory

There are three global options or arguments if you will. That being the host address the port and the directory to be served.

The one caveat being that with **python 2.7.x** ONLY the current directory can be served. 

## Primary Options

| Property           | Type       | Description                         | Default      |
|--------------------|------------|-------------------------------------|--------------|
| --host, -h, -a     | String     | The host to bind                    | 0.0.0.0      |
| --port, -p         | Number     | The port to use with host           | 5000         |
| --help, -h         | Boolean    | Results in showing help             |              |
| --version, -v      | Boolean    | Shows all versions                  |              |

> If process.env.HOST or process.env.PORT is present the will override above defaults.

## Examples

It's important to note that the Node server or [http-server]() has considerably more configuration objects. When running PHP or Python servers there's not much configuration beyonnd the host and port. However if this changes or there's somethign we've missed all arguments you've provided will be passed along to those commands and should work as expected.

```sh
servani /path/to/serve -h 127.0.0.1 -p 8080 --cors=* --gzip -d
servani php /path/to/serve -h 127.0.0.1 -p 8080
servani py3 /path/to/serve -h 127.0.0.1 -p 8080
```

## Viewing All Options

The above primary options are used globally and passed to underlying commands. To view all options and help run:

```sh
servany -h
```

## PHP & Python

For PHP, Servani will always provide the following arguments/options hence there is no need for you to include them.

> -S HOST:PORT

For Python it is similar. Servani will always provide the following arguments/options. Again there is no need for you to include them in your command.

**For Python 2.7.x**

> -m SimpleHTTPServer PORT

**For Python 3.x.x**

> -m http.server --cgi --bind HOST --directory /path/to/serve PORT

