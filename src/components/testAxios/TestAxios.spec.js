import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import TestAxios from "./TestAxios";
import axiosMock from "axios";

jest.mock("axios");

it("should display a loading Text", () =>{
    const { getByTestId } = render(<TestAxios/>)

    expect(getByTestId("loading")).toHaveTextContent("Loading...");
});

if("should load and display the data", async () =>{
    const url = '/hello';
    const { getByTestId } = render(<TestAxios url={url}/>);

    axiosMock.get.mockResolvedValueOnce({
        data: { hello: "Hello CKPD 3453"},
    });

    fireEvent.click(getByTestId("fetch-data"));
    
    const helloData = await waitFor(() => getByTestId("show-data"));

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenNthCalledWith(url);
    expect(helloData).toHaveTextContent("Hello CKPD 3453");
});