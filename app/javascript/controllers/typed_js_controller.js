import { Controller } from "@hotwired/stimulus"
// Don't forget to import the NPM package
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["The best place to keep track of your films", "Create your custom lists"],
      typeSpeed: 50,
      loop: true
    });
  }
}
