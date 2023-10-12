import reflex as rx
from My_bio.components.link_button import link_button


def links() -> rx.component:
    return rx.vstack(
        link_button("LinkedIn", "https://www.linkedin.com/in/lazaro-d-masot"),
        link_button("X", "https://twitter.com/home")
    )
