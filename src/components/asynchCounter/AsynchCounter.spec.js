import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import AsynchCounter from "./AsynchCounter"


describe("Testing asynchronous counter functionality", async () => {
    it("increments the counter value 0.5 seconds after the Increment button is clicked", () =>{
        const { getByTestId, getByText } = render(<AsynchCounter/>);

        fireEvent.click(getByTestId("up-button"));

        // const counter = await waitFor(() => getByText("1"));
        const counter = await waitFor(() => getByText("1"));

        expect(counter).toHaveTextContent("1");
    });    
});