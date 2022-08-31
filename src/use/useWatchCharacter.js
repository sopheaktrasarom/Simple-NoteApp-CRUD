import { watch } from "vue";
export function useWatchCharacter(valuetowatch, maxlength) {
  watch(valuetowatch, (newvalue) => {
    if (newvalue.length === maxlength) {
      alert(`alert must be ${maxlength}`);
    }
  });
}
