import reflex as rx


def navbar() -> rx.component:
    return rx.hstack(
        rx.text("lazdev", height="25px"),
        position="sticky",
        bg="blue",
        padding_x="15px",
        padding_y="10px",
    )
