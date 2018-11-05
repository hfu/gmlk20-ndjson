# gmlk20-ndjson
create GeoJSON Text Sequence of Global Map Sri Lanka 2.0

# background
I would like to createGeoJSON Text Sequence of Global Map Sri Lanka for OSGeo.JP Workshop for UN Vector Tile Toolkit in December 2018.

# install
```console
$ git clone git@github.com:hfu/gmlk20-ndjson
$ cd gmlk20-ndjson
$ npm install
```

# usage
```console
$ vi config/default.hjson
$ node index.js > gmlk20.ndjson
```

# note
Please note [the usage condition of Global Map Sri Lanka 2.0](https://github.com/globalmaps/gmlk20/blob/master/README.md). It reads as the following.
- Attribution "Global Map of Sri Lanka ©ISCGM/ Survey Department, Sri Lanka" is required for non-commercial use.
- Commercial-use is not allowed.

# data facts
In the result GeoJSON Text Sequence data, the thematic layers can be distinguished by f_code property. Following is the list of values of the f_code property.

- BA010 coastl
- AP030 roadl
- BH140 riverl
- BH000 inwatera
- FA000 polbndl
- AN010 raill
- GB005 airp
- AL020 builtupp
- FA001 polbnda

# see also
- [Global Map Sri Lanka 2.0 at Global Map data archives](https://github.com/globalmaps/gmlk20)
- [globalm-fs](https://github.com/hfu/globalm-fs/blob/master/index.js)
