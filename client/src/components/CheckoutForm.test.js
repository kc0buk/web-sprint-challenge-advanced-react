import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    
    // Get form header and expect it to be in the document
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    
    // Get first name input field and enter text
    const fNameInput = screen.getByLabelText(/first name/i)
    fireEvent.change(fNameInput, { target: { value: 'jeremiah' } })
    expect(screen.getByDisplayValue(/jeremiah/i)).toBeInTheDocument()

    // Get submit button and expect it to be in the document
    const submitBtn = screen.getByRole('button', { name: /checkout/i })
    expect(submitBtn).toBeInTheDocument()

    // Click submit button
    fireEvent.click(submitBtn)
    // screen.debug()

    // Get success message div, expect it to be in the document, and to contain details from the form submission
    const successMsg = screen.getByTestId(/successMessage/i)
    expect(successMsg).toBeInTheDocument()
    expect(successMsg).toHaveTextContent(/jeremiah/i)

});
