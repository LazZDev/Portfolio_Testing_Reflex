import reflex as rx
import datetime


def footer() -> rx.component:
    return rx.vstack(
        rx.link(rx.image(src="favicon.ico"),
                href="https://www.reflex.dev", is_external=True),
        rx.link(f"© {datetime.date.today().year} MASOTDEV BY LAZARO MASOT",
                href="https://github.com/lazaromasot/lazaromasot", is_external=True),
        rx.text("BUILDING SOFTWARE WITH ❤️ FROM MIAMI TO THE WORLD."),
        rx.text("This is a test project.")
    )
