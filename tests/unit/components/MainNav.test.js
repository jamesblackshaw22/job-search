import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("Displays the company name", () => {
    render(MainNav);
    screen.getAllByText("JB Jobs");
  });
});
