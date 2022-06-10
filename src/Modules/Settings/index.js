import { Form, Input, Card, Button } from "antd";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

import React, { useState } from "react";

const Settings = () => {
  const [address, setAddress] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  console.log(address);

  const getAddressLatLng = async (address) => {
    setAddress(address);
    const geocodedByAddress = await geocodeByAddress(address.label);
    const latLng = await getLatLng(geocodedByAddress[0]);
    setCoordinates(latLng);
  };

  return (
    <Card title="Restaurant Details" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{ span: 8 }}>
        <Form.Item label="Restaurant Name" required>
          <Input placeholder="Enter Restuarant Name" />
        </Form.Item>

        <Form.Item label="Restaurant Address" required>
          <GooglePlacesAutocomplete
            apiKey="AIzaSyCC6YiCbOb81Mlib-cZ_LqG8E6PW0XdnUk"
            selectProps={{
              value: address,
              onChange: getAddressLatLng,
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>

      <span>
        {coordinates?.lat} , {coordinates?.lng}
      </span>
    </Card>
  );
};

export default Settings;
