import { shallowMount } from "@vue/test-utils";
import HelloWorld from "../../hello-world/src/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("test HelloWorld", async () => {
    const wrapper = shallowMount(HelloWorld, {
      props: { msg: "Hello Vue 3 + TypeScript + Vite" },
    });
    expect(wrapper.vm.count).toBe(0);
    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
