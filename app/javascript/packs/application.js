// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
//import Rails from "@rails/ujs"
require("turbolinnks").start();
//import Turbolinks from "turbolinks"
require("@rails/activestorage").start();
//import * as ActiveStorage from "@rails/activestorage"
require("channels");
//import "channels"
import "bootstrap";
import "./src/application.scss";

global.$ = jQuery;
//Rails.start()
//Turbolinks.start()
//ActiveStorage.start()


require("trix")
require("@rails/actiontext")