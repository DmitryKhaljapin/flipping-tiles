export function* createId() {
    const firstId = 1;
    const lastId = 16;

    for (let id = firstId; id <= lastId; id++) {
        yield id;
    }
}