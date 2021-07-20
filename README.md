# gitlab-collector

# Questions

1. What is a collector?

```
A collector extend the functionality of Lake by adding a data source to the total number of data sources available to Lake.

```

2. Does a collector have a DB?

` No. The data is fetched here in memory and passed to the Lake project. `

3. Does a collector need its own server?

``` No. Lake installs a collector as a Node module. It looks for a file called "collector.js" with a method called "fetchData". Lake runs the method from this Node module instance and returns the data that Lake can use.

Example - (Some File in Lake):

import ThisCollectorModule = require('ThisCollector')

const data = await ThisCollectorModule.fetchData()

saveInMongoDb(data)

```

4. What are the peices of a collector?

- "collector.js" with method called "fetchData"
- "fetchData" must return an array of JSON objects. They must be the raw data from the api.
- "fetchData" must accept the following parameters:
    - apiToken
    - key (ex. projectId / userId)
    - value (ex. 12 / 'kevin')

5. What data does Lake want? Users? Projects? How do we tell it?

```

Lake wants everything. It doesn't specify users, projects, etc. The collector needs to make all the api calls that are available. This project should have a JSON config file which contains all the api routes that are going to be called.

```