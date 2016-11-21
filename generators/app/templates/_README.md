# <%= name %>
> This project is made with the [craftskeleton](https://github.com/interpunkt/generator-craftskeleton).

## Setup local Installation
1. Download this repository on your local machine.  
2. Create a local vhost – I prefere [MAMP Pro](https://www.mamp.info/de/mamp-pro/) – which is pointing on `/public` in this project.
3. Create a database with the same name in the config file: `/config/config.local.php`.
4. Run `npm install && bower install`.

## Development 
All development files are located under `/public/dev`. This direcotry is only for local develpoment.

### Default Task with [BrowserSync](https://www.browsersync.io/)
```
gulp
```

### Task for Building
```
gulp build
```

### Add new Development Dependencies
Bower is used for the frontend dependencies. To add new dependencies you have to run following command in your bash:
```
bower install --save [DEPENDENCIE NAME]
```
