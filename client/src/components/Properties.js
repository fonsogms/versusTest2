import React from "react";
import Checkbox from "./Checkbox";
const Properties = ({ physicalObject, selectedProperties, onChange }) => {
  const handleCheckboxClicked = selectedPropertyName => {
    if (selectedProperties[selectedPropertyName]) {
      delete selectedProperties[selectedPropertyName];
    } else {
      selectedProperties[selectedPropertyName] = {};
    }
    onChange(selectedProperties);
  };

  const handleSubPropertiesListChange = (propertyName, subProperties) => {
    selectedProperties[propertyName] = subProperties;
    onChange(selectedProperties);
  };

  return (
    <div>
      <ul>
        {Object.keys(physicalObject.properties).map(property => (
          <>
            {physicalObject.properties[property].properties ? (
              <>
                <li>{property}</li>
                <Checkbox
                  selected={physicalObject.properties[property]}
                  onChange={() => {
                    handleCheckboxClicked(property);
                  }}
                />
                {selectedProperties[property] ? (
                  <Properties
                    physicalObject={physicalObject.properties[property]}
                    selectedProperties={selectedProperties[property]}
                    onChange={subProperties =>
                      handleSubPropertiesListChange(property, subProperties)
                    }
                  />
                ) : null}
              </>
            ) : (
              <li
                style={{
                  listStyleType: "none",
                  textAlign: "left"
                }}
              >
                {property[0].toUpperCase() +
                  property.slice(1) +
                  ": " +
                  physicalObject.properties[property]}
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Properties;
