import reflex as rx


def link_button(text: str, url: str) -> rx.component:
    return rx.link(
        rx.button(text),
        href=url,
        is_external=True)
