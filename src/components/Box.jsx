import { Component } from "react";
import { RadioGroup } from "@headlessui/react";

import Star from "../images/icon-star.svg";
import Thanks from "../images/illustration-thank-you.svg";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { num: null, isSubmitted: true, isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });

    if (this.state.num) {
      this.setState({ isSubmitted: false });
    }
  }

  render() {
    const nums = [1, 2, 3, 4, 5];
    const numsDisplay = nums.map((num) => (
      <RadioGroup
        key={num}
        value={this.state.num}
        onChange={() => this.setState({ num })}
      >
        <RadioGroup.Option value={num} className="flex items-center">
          {({ checked }) => (
            <span
              className={`rounded-full p-3 h-10 w-10 flex items-center justify-center hover:cursor-pointer hover:bg-primaryLight transition-all duration-300
              ${checked ? "bg-tertiary" : "bg-starBg"} ${
                !this.state.num && this.state.isClicked
                  ? `animate-bounce`
                  : "animate-none"
              } md:h-12 md:w-12 `}
            >
              {num}
            </span>
          )}
        </RadioGroup.Option>
      </RadioGroup>
    ));

    return this.state.isSubmitted ? (
      <main
        className="bg-gradient-to-tl
       from-secondary/60
       to-primaryDark
        text-white w-[88%]
        max-w-[23rem] p-5
        rounded-xl
        space-y-4
        shadow-customShadow
        md:rounded-3xl md:space-y-6"
      >
        <img
          src={Star}
          alt="star"
          className="bg-starBg rounded-full p-3 md:p-4"
        />
        <h1 className="text-2xl md:text-[1.6rem]">How did we do?</h1>
        <p className="text-primary text-sm md:pr-3">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex flex-row justify-between items-center my-6">
          {numsDisplay}
        </div>
        <button
          onClick={this.handleClick}
          className="uppercase bg-tertiary rounded-full
            p-3 w-full text-xs tracking-widest font-bold hover:bg-white hover:text-tertiary transition-all duration-300 md:text-sm"
        >
          Submit
        </button>
        <span className="w-full inline-block !m-0 text-center text-red-500 text-xs">
          {!this.state.num && this.state.isClicked && "Please select a number"}
        </span>
      </main>
    ) : (
      <main
        className="bg-gradient-to-tl
       from-secondary/60
       to-primaryDark
       text-white
       w-[88%] max-w-[25rem]
       p-5 py-8
       rounded-xl
       space-y-4
       flex flex-col items-center
       shadow-customShadow
       md:rounded-3xl md:space-y-6"
      >
        <img src={Thanks} alt="thanke you" />
        <p className="text-tertiary bg-starBg rounded-full p-1 px-3 text-sm">
          You selected {this.state.num} out of 5
        </p>
        <h2 className="text-2xl md:text-[1.6rem]">Thanke you!</h2>
        <p className="text-primary text-sm text-center md:px-4">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </main>
    );
  }
}

export default Box;
