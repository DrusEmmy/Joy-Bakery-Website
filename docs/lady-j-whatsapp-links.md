# Lady J: WhatsApp button links

Every order or contact button opens WhatsApp. Replace `{WHATSAPP_NUMBER}` with her number once she confirms it.

## Number format

- Use digits only: country code first, no `+`, no spaces, no leading zero.
- Nigeria example: `0704 673 8087` becomes `2347046738087`.
- **Unconfirmed:** the flyers show `07046738087` (`2347046738087`), but the hero mock shows `+234 905 328 4726` (`2349053284726`). Confirm which one she wants.

## Build helper

```js
const WA_NUMBER = "234XXXXXXXXXX"; // set once, use everywhere
const waLink = (msg) =>
  `https://wa.me/${WA_NUMBER}` + (msg ? `?text=${encodeURIComponent(msg)}` : "");
```

## Buttons

| # | Where | Button | Message | Link |
|---|---|---|---|---|
| 1 | Desktop sticky header | Order Now | Hi Lady J, I'd like to place an order. | `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Lady%20J%2C%20I%27d%20like%20to%20place%20an%20order.` |
| 2 | Hero | ORDER NOW | Hi Lady J, I'd like to place an order. | `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Lady%20J%2C%20I%27d%20like%20to%20place%20an%20order.` |
| 3 | Hero chip (phone number) | WhatsApp number chip | (no message, opens a chat) | `https://wa.me/{WHATSAPP_NUMBER}` |
| 4 | Ready To Buy card | Order (Chin Chin) | Hi Lady J, I'd like to order Chin Chin. | `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Lady%20J%2C%20I%27d%20like%20to%20order%20Chin%20Chin.` |
| 5 | Ready To Buy card | Order (Plantain Chips) | Hi Lady J, I'd like to order Plantain Chips. | `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Lady%20J%2C%20I%27d%20like%20to%20order%20Plantain%20Chips.` |
| 6 | Made For You card | Place Order (Banana Cakes) | Hi Lady J, I'd like to place a custom order for Banana Cakes. | `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Lady%20J%2C%20I%27d%20like%20to%20place%20a%20custom%20order%20for%20Banana%20Cakes.` |
| 7 | Made For You card | Place Order (Birthday Cakes) | Hi Lady J, I'd like to place a custom order for Birthday Cakes. | `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Lady%20J%2C%20I%27d%20like%20to%20place%20a%20custom%20order%20for%20Birthday%20Cakes.` |
| 8 | About Us | Chat with us | Hi Lady J, I have a question about your treats. | `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Lady%20J%2C%20I%20have%20a%20question%20about%20your%20treats.` |
| 9 | Events & Catering card | Plan with us (Birthdays) | Hi Lady J, I'm planning a birthday and would like to talk about catering. | `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Lady%20J%2C%20I%27m%20planning%20a%20birthday%20and%20would%20like%20to%20talk%20about%20catering.` |
| 10 | Events & Catering card | Plan with us (Weddings) | Hi Lady J, I'm planning a wedding and would like to talk about catering. | `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Lady%20J%2C%20I%27m%20planning%20a%20wedding%20and%20would%20like%20to%20talk%20about%20catering.` |
| 11 | Events & Catering card | Plan with us (Office and corporate) | Hi Lady J, I'm planning an office or corporate event and would like to talk about catering. | `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Lady%20J%2C%20I%27m%20planning%20an%20office%20or%20corporate%20event%20and%20would%20like%20to%20talk%20about%20catering.` |
| 12 | Footer | Order on WhatsApp | Hi Lady J, I'd like to place an order. | `https://wa.me/{WHATSAPP_NUMBER}?text=Hi%20Lady%20J%2C%20I%27d%20like%20to%20place%20an%20order.` |

## Other products

For any card not listed here, use the same pattern:

- **Ready To Buy:** `Hi Lady J, I'd like to order {Product}.`
- **Made For You:** `Hi Lady J, I'd like to place a custom order for {Product}.`

## Notes for the builder

- Open links with `target="_blank"` and `rel="noopener"`.
- The header is sticky on every screen. Only the desktop header has an Order Now button. Phone and tablet have none.
- Prices are not in the messages, because they are not confirmed yet.
- Add each product name from the card's own title so the message always matches the card.
