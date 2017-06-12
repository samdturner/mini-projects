import React from 'react';
import { mount } from 'enzyme';
import Calculator from './calculator';

describe("React Calculator", () => {
  let mountedCalculator;
  const calculator = () => {
    if (!mountedCalculator){
      mountedCalculator = mount(<Calculator/>);
    };
    return mountedCalculator;
  }

  beforeEach(() => {
    mountedCalculator = undefined;
  })

  let num1 = calculator().find('.num1');
  let num2 = calculator().find('.num2');
  let total = calculator().find('.total');

  it("always renders a div", () => {
    const divs = calculator().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    it ("contains everything else that gets rendered", () => {
      let divs = calculator().find("div");
      const wrappingDiv = divs.first();

      expect(wrappingDiv.children()).toEqual(calculator().children());
    });
  });

  describe("the state and display", () => {
    let state = { num1: "", num2: "", total: 0 };

    it("renders num1, num2, and result", () => {
      expect(num1.length).toEqual(1);
      expect(num2.length).toEqual(1);
      expect(total.length).toEqual(1);
    });

    xit("changes state for num1, num2, and result", () => {

    });
  });

  describe("the core functions", () => {
    beforeEach(() => {
      calculator().find(".clear").simulate("click");
    });

    describe("clear", () => {
      let clearButton = calculator().find(".clear");

      it("renders the clear button", () => {
        expect(clearButton.length).toEqual(1);
      })

      xit("clears state for num1, num2, and result", () => {

      })
    });

    describe("addition", () => {
      let addButton = calculator().find('.add');

      it("renders the add button", () => {
        expect(addButton.length).toEqual(1);
      })

      xit("adds num1 and num2 correctly", () => {
      });
    })

    describe("subtraction", () => {
      let subButton = calculator().find('.subtract');

      it("renders the subtract button", () => {
        expect(subButton.length).toEqual(1);
      })

      xit("subtracts num1 and num2 correctly", () => {
      });
    })

    describe("multiplication", () => {
      let mulButton = calculator().find('.multiply');

      it("renders the multiply button", () => {
        expect(mulButton.length).toEqual(1);
      })

      xit("multiplies num1 and num2 correctly", () => {
      });
    })

    describe("division", () => {
      let divButton = calculator().find('.divide');

      it("renders the divide button", () => {
        expect(divButton.length).toEqual(1);
      })

      xit("divides num1 and num2 correctly", () => {
      });
    });
  })
});
