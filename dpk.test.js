const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '123' when given 123(number) as partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 123 });
    expect(trivialKey).toBe("123");
  });

  it("Returns the literal '123' when given 123(string) as partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: '123' });
    expect(trivialKey).toBe("123");
  });
  
  it("Returns the key generated when given empty object", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });
});
