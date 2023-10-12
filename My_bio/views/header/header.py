import reflex as rx


def header() -> rx.component:
    return rx.vstack(
        rx.avatar(name="masotdev", height="40px"),
        rx.text("@masotdev"),
        rx.text("Hi👋🏻, my name is LAZARO MASOT"),
        rx.text("I am a software engineer, with one year of experience in web development. I currently work in the technology industry. Here you can find my links of interest. Welcome!")
    )
