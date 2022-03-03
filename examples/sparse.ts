/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LOADER_OPTIONS } from "./config";
import { Loader } from "@googlemaps/js-api-loader";
import { MarkerClusterer } from "../src";

const coords = [
  [-73.84421521958048, 40.723091773924274],
  [-73.81867945834878, 40.79411066708779],
  [-73.93660770459083, 40.717580740099116],
  [-73.93445615919741, 40.713537494833226],
  [-73.97597938483258, 40.66677775537875],
  [-73.98494997200308, 40.770045625891846],
];

const mapOptions = {
  center: { lat: 40.7128, lng: -73.85 },
  zoom: 12,
};

new Loader(LOADER_OPTIONS).load().then(() => {
  const element = document.getElementById("map");

  const map = new google.maps.Map(element, mapOptions);

  const markers = coords.map(
    ([lng, lat]) =>
      new google.maps.Marker({
        position: {
          lat,
          lng,
        },
        map,
      })
  );

  const markerCluster = new MarkerClusterer({
    markers,
  });

  markerCluster.setMap(map);
});
