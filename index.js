const SLIDER_OPTIONS = {
  max: 255,
  min: 0,
  step: 1,
  range: "min",
}
class Slider {
  constructor() {
    this.tabs = {
      color: {
        red: 0,
        green: 0,
        blue: 0,
      },
      backgroundColor: {
        red: 255,
        green: 255,
        blue: 255,
      }
    }
    this.currentTab = 'color';
    this.block = document.getElementById("block");
    document.getElementById("colorBtn").addEventListener('click', () => this.setCurrentTab('color'));
    document.getElementById("bgColorBtn").addEventListener('click', () => this.setCurrentTab('backgroundColor'));
    this.red = $("#red").slider({
      ...SLIDER_OPTIONS,
      slide: (_, { value }) => {
        this.tabs[this.currentTab].red = value;
        this.render();
      }
    })
    this.green = $("#green").slider({
      ...SLIDER_OPTIONS,
      slide: (_, { value }) => {
        this.tabs[this.currentTab].green = value; 
        this.render();
      }
    })
    this.blue = $("#blue").slider({
      ...SLIDER_OPTIONS,
      slide: (_, { value }) => {
        this.tabs[this.currentTab].blue = value; 
        this.render();
      }
    })
  }
  setCurrentTab(tab) {
    console.log(tab)
    this.currentTab = tab;
    this.red.slider("value", this.tabs[tab].red);
    this.green.slider("value", this.tabs[tab].green);
    this.blue.slider("value", this.tabs[tab].blue);
  }
  render() {
    this.block.style.backgroundColor = 
      `rgb(${this.tabs.backgroundColor.red}, ${this.tabs.backgroundColor.green}, ${this.tabs.backgroundColor.blue})`;
    this.block.style.color = `rgb(${this.tabs.color.red}, ${this.tabs.color.green}, ${this.tabs.color.blue})`;
  }
}

const slider = new Slider();