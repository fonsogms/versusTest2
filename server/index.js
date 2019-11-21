const express = require("express");
const router = express.Router();
const fdb = require("./fakedb");

router.get("/:name_url", (req, res) => {
  const search = req.params.name_url;

  function getObject(name) {
    return new Promise(resolve => {
      fdb.findByNameUrl([name], function(err, data) {
        if (data.length > 0) {
          console.log(data);
          const properties = data[0];

          resolve(properties);
        } else {
          console.log(data);
          resolve(err);
        }
      });
    });
  }

  function getProperties(properties, data) {
    return new Promise(resolve => {
      fdb.findByName(properties, (err, data) => {
        resolve(data);
      });
    });
  }

  async function getFinalObject(object) {
    let local_promises = [];
    let props = await getProperties([...Object.keys(object.properties)]);
    props.forEach(async function test(elem) {
      if (elem.unit && typeof object.properties[elem.name] === "number") {
        object.properties[elem.name] =
          object.properties[elem.name] + " " + elem.unit;
      } else if (
        Object.keys(elem).length <= 1 &&
        typeof object.properties[elem.name] === "boolean"
      ) {
        object.properties[elem.name] = "yes";
      }
      if (elem.properties) {
        let props_promise = getFinalObject(elem);
        local_promises.push(props_promise);
        object.properties[elem.name] = await props_promise;
      }
    });
    await Promise.all(local_promises);
    return object;
  }

  async function getEverything() {
    const physicalObject = await getObject(search);
    if (physicalObject === null) {
      res.json("These are not the items you are looking for");
    } else {
      res.json(await getFinalObject(physicalObject));
    }
  }
  getEverything();
});

module.exports = router;
