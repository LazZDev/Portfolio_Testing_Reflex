import reflex as rx
from My_bio.components.navbar import navbar
from My_bio.components.footer import footer
from My_bio.views.header.header import header
from My_bio.views.links.links import links


class State(rx.State):
    pass


def index() -> rx.component:
    return rx.vstack(
        navbar(),
        header(),
        links(),
        footer()
    )


app = rx.App()
app.add_page(index)
app.compile()
