import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart"

const plants = [
    {
        "name": "Peperomia Rosso",
        "id": 143,
        "scientificName": "Peperomia caperata rosso",
        "difficulty": "easy",
        "light": "direct",
        "img": "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
        "sizes": [
            "small"
        ],
        "watering": 2,
        "description": "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
        "price": 21
    }
]

test("displays plants in cart", () => {
    // Render shopping cart with sample data
    const { getByText } = render(<ShoppingCart cart={plants} />)
    
    // Get plant image and expect it to match selected plant
    const cartImg = screen.getByAltText(/Peperomia Rosso/i)
    expect(cartImg).toBeInTheDocument()

    // Get plant name and expect it to match selected plant
    const plantCard = screen.getByTestId(/plantcard/i)
    expect(plantCard).toBeInTheDocument
    const itemHeadline = screen.getByText(/Peperomia Rosso/i)
    expect(itemHeadline).toBeInTheDocument()

    // Get Remove button and expect it to be in the document
    const removeBtn = screen.getByRole('button', { name: /remove/i })
    expect(removeBtn).toBeInTheDocument()

    // Click Remove button
    // fireEvent.click(removeBtn)

    // Expect selected plant to be removed from the document
    // expect(plantCard).not.toBeInTheDocument()

    screen.debug()
  })