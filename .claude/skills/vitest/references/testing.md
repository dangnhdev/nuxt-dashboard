# Vitest - Testing

**Pages:** 42

---

## assert

**URL:** llms-txt#assert

**Contents:**
- assert
- fail
- isOk
- isNotOk
- equal
- notEqual
- strictEqual
- deepEqual
- notDeepEqual
- isAbove

Vitest reexports the `assert` method from [`chai`](https://www.chaijs.com/api/assert/) for verifying invariants.

* **Type:** `(expression: any, message?: string) => asserts expression`

Assert that the given `expression` is truthy, otherwise the assertion fails.

* **Type:**
  * `(message?: string) => never`
  * `<T>(actual: T, expected: T, message?: string, operator?: string) => never`

Force an assertion failure.

* **Type:** `<T>(value: T, message?: string) => asserts value`
* **Alias** `ok`

Assert that the given `value` is truthy.

* **Type:** `<T>(value: T, message?: string) => void`
* **Alias** `notOk`

Assert that the given `value` is falsy.

* **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts non-strict equality (==) of `actual` and `expected`.

* **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts non-strict inequality (!=) of `actual` and `expected`.

* **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts strict equality (===) of `actual` and `expected`.

* **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Asserts that `actual` is deeply equal to `expected`.

* **Type:** `<T>(actual: T, expected: T, message?: string) => void`

Assert that `actual` is not deeply equal to `expected`.

* **Type:** `(valueToCheck: number, valueToBeAbove: number, message?: string) => void`

Assert that `valueToCheck` is strictly greater than (>) `valueToBeAbove`.

* **Type:** `(valueToCheck: number, valueToBeAtLeast: number, message?: string) => void`

Assert that `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`.

* **Type:** `(valueToCheck: number, valueToBeBelow: number, message?: string) => void`

Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`.

* **Type:** `(valueToCheck: number, valueToBeAtMost: number, message?: string) => void`

Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`.

* **Type:** `<T>(value: T, message?: string) => asserts value is true`

Asserts that `value` is true.

* **Type:** `<T>(value: T, message?: string) => asserts value is Exclude<T, true>`

Asserts that `value` is not true.

* **Type:** `<T>(value: T, message?: string) => asserts value is false`

Asserts that `value` is false.

* **Type:** `<T>(value: T, message?: string) => asserts value is Exclude<T, false>`

Asserts that `value` is not false.

* **Type:** `<T>(value: T, message?: string) => asserts value is null`

Asserts that `value` is null.

* **Type:** `<T>(value: T, message?: string) => asserts value is Exclude<T, null>`

Asserts that `value` is not null.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is NaN.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not NaN.

* **Type:** `<T>(value: T, message?: string) => asserts value is NonNullable<T>`

Asserts that `value` is neither null nor undefined.

* **Type:** `<T>(value: T, message?: string) => asserts value is null | undefined`

Asserts that `value` is either null nor undefined.

* **Type:** `<T>(value: T, message?: string) => asserts value is undefined`

Asserts that `value` is undefined.

* **Type:** `<T>(value: T, message?: string) => asserts value is Exclude<T, undefined>`

Asserts that `value` is not undefined.

* **Type:** `<T>(value: T, message?: string) => void`
* **Alias:** `isCallable`
  Asserts that `value` is a function.

* **Type:** `<T>(value: T, message?: string) => void`
* **Alias:** `isNotCallable`

Asserts that `value` is not a function.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is an object of type Object (as revealed by Object.prototype.toString). The assertion does not match subclassed objects.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not an object of type Object (as revealed by Object.prototype.toString). The assertion does not match subclassed objects.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is an array.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not an array.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a string.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not a string.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a number.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not a number.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a finite number (not NaN, Infinity).

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is a boolean.

* **Type:** `<T>(value: T, message?: string) => void`

Asserts that `value` is not a boolean.

* **Type:** `<T>(value: T, name: string, message?: string) => void`

Asserts that `value`’s type is `name`, as determined by Object.prototype.toString.

* **Type:** `<T>(value: T, name: string, message?: string) => void`

Asserts that `value`’s type is not `name`, as determined by Object.prototype.toString.

* **Type:** `<T>(value: T, constructor: Function, message?: string) => asserts value is T`

Asserts that `value` is an instance of `constructor`.

* **Type:** `<T>(value: T, constructor: Function, message?: string) => asserts value is Exclude<T, U>`

Asserts that `value` is not an instance of `constructor`.

* **Type:**
  * `(haystack: string, needle: string, message?: string) => void`
  * `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
  * `<T extends object>(haystack: WeakSet<T>, needle: T, message?: string) => void`
  * `<T>(haystack: T, needle: Partial<T>, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a value in an array, a substring in a string, or a subset of properties in an object.

* **Type:**
  * `(haystack: string, needle: string, message?: string) => void`
  * `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
  * `<T extends object>(haystack: WeakSet<T>, needle: T, message?: string) => void`
  * `<T>(haystack: T, needle: Partial<T>, message?: string) => void`

Asserts that `haystack` does not include `needle`. It can be used to assert the absence of a value in an array, a substring in a string, or a subset of properties in an object.

* **Type:**
* `(haystack: string, needle: string, message?: string) => void`
* `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
* `<T>(haystack: T, needle: T extends WeakSet<any> ? never : Partial<T>, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a value in an array or a subset of properties in an object. Deep equality is used.

* **Type:**
  * `(haystack: string, needle: string, message?: string) => void`
  * `<T>(haystack: readonly T[] | ReadonlySet<T> | ReadonlyMap<any, T>, needle: T, message?: string) => void`
  * `<T>(haystack: T, needle: T extends WeakSet<any> ? never : Partial<T>, message?: string) => void`

Asserts that `haystack` does not include `needle`. It can be used to assert the absence of a value in an array or a subset of properties in an object. Deep equality is used.

* **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[]’ and ‘.’ in property names can be escaped using double backslashes.

* **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` does not include `needle`. Can be used to assert the inclusion of a subset of properties in an object. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[]’ and ‘.’ in property names can be escaped using double backslashes.

* **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object while checking for deep equality. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[]’ and ‘.’ in property names can be escaped using double backslashes.

## notDeepNestedInclude

* **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` not includes `needle`. Can be used to assert the absence of a subset of properties in an object while checking for deep equality. Enables the use of dot- and bracket-notation for referencing nested properties. ‘\[]’ and ‘.’ in property names can be escaped using double backslashes.

* **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties.

* **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties.

* **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` includes `needle`. Can be used to assert the inclusion of a subset of properties in an object while ignoring inherited properties and checking for deep equality.

* **Type:** `(haystack: any, needle: any, message?: string) => void`

Asserts that `haystack` not includes `needle`. Can be used to assert the absence of a subset of properties in an object while ignoring inherited properties and checking for deep equality.

* **Type:** `(value: string, regexp: RegExp, message?: string) => void`

Asserts that `value` matches the regular expression `regexp`.

* **Type:** `(value: string, regexp: RegExp, message?: string) => void`

Asserts that `value` does not matches the regular expression `regexp`.

* **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property`

* **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property`

* **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property` with a value given by `value`. Uses a strict equality check (===).

* **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property` with a value given by `value`. Uses a strict equality check (===).

* **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property` with a value given by `value`. Uses a deep equality check.

## notDeepPropertyVal

* **Type:** `<T, V>(object: T, property: string, value: V, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property` with a value given by `value`. Uses a deep equality check.

* **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` has a direct or inherited property named by `property`, which can be a string using dot- and bracket-notation for nested reference.

* **Type:** `<T>(object: T, property: string, message?: string) => void`

Asserts that `object` does not have a direct or inherited property named by `property`, which can be a string using dot- and bracket-notation for nested reference.

* **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` has a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).

## notNestedPropertyVal

* **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` does not have a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a strict equality check (===).

## deepNestedPropertyVal

* **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` has a property named by `property` with a value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a deep equality check (===).

## notDeepNestedPropertyVal

* **Type:** `<T>(object: T, property: string, value: any, message?: string) => void`

Asserts that `object` does not have a property named by `property` with value given by `value`. `property` can use dot- and bracket-notation for nested reference. Uses a deep equality check.

* **Type:** `<T extends { readonly length?: number | undefined } | { readonly size?: number | undefined }>(object: T, length: number, message?: string) => void`

Asserts that `object` has a `length` or `size` with the expected value.

* **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has at least one of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

* **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has all and only all of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

* **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has all of the `keys` provided but may have more keys not listed. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

## doesNotHaveAnyKeys

* **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has none of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

## doesNotHaveAllKeys

* **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` does not have at least one of the `keys` provided. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

* **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has at least one of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

* **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has all and only all of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

## containsAllDeepKeys

* **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` contains all of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

## doesNotHaveAnyDeepKeys

* **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` has none of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

## doesNotHaveAllDeepKeys

* **Type:** `<T>(object: T, keys: Array<Object | string> | { [key: string]: any }, message?: string) => void`

Asserts that `object` does not have at least one of the `keys` provided. Since Sets and Maps can have objects as keys you can use this assertion to perform a deep comparison. You can also provide a single object instead of a keys array and its keys will be used as the expected set of keys.

* **Type:**
  * `(fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string) => void`
  * `(fn: () => void, errorLike?: ErrorConstructor | Error | null, errMsgMatcher?: RegExp | string | null, message?: string) => void`
* **Alias:**
  * `throw`
  * `Throw`

If `errorLike` is an Error constructor, asserts that `fn` will throw an error that is an instance of `errorLike`. If errorLike is an Error instance, asserts that the error thrown is the same instance as `errorLike`. If `errMsgMatcher` is provided, it also asserts that the error thrown will have a message matching `errMsgMatcher`.

* **Type:** `(fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string) => void`
* **Type:** `(fn: () => void, errorLike?: ErrorConstructor | Error | null, errMsgMatcher?: RegExp | string | null, message?: string) => void`

If `errorLike` is an Error constructor, asserts that `fn` will not throw an error that is an instance of `errorLike`. If errorLike is an Error instance, asserts that the error thrown is not the same instance as `errorLike`. If `errMsgMatcher` is provided, it also asserts that the error thrown will not have a message matching `errMsgMatcher`.

* **Type:** `(val1: OperatorComparable, operator: Operator, val2: OperatorComparable, message?: string) => void`

Compare `val1` and `val2` using `operator`.

* **Type:** `(actual: number, expected: number, delta: number, message?: string) => void`
* **Alias:** `approximately`

Asserts that the `actual` is equal `expected`, to within a +/- `delta` range.

* **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in any order. Uses a strict equality check (===).

* **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` don't have the same members in any order. Uses a strict equality check (===).

* **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in any order. Uses a deep equality check.

## notSameDeepMembers

* **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` don’t have the same members in any order. Uses a deep equality check.

## sameOrderedMembers

* **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in the same order. Uses a strict equality check (===).

## notSameOrderedMembers

* **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in the same order. Uses a strict equality check (===).

## sameDeepOrderedMembers

* **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` have the same members in the same order. Uses a deep equality check.

## notSameDeepOrderedMembers

* **Type:** `<T>(set1: T[], set2: T[], message?: string) => void`

Asserts that `set1` and `set2` don’t have the same members in the same order. Uses a deep equality check.

* **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in any order. Uses a strict equality check (===). Duplicates are ignored.

* **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn't included in `superset` in any order. Uses a strict equality check (===). Duplicates are ignored.

## includeDeepMembers

* **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in any order. Uses a deep equality check. Duplicates are ignored.

## notIncludeDeepMembers

* **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn’t included in `superset` in any order. Uses a deep equality check. Duplicates are ignored.

## includeOrderedMembers

* **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in the same order beginning with the first element in `superset`. Uses a strict equality check (===).

## notIncludeOrderedMembers

* **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn't included in `superset` in the same order beginning with the first element in `superset`. Uses a strict equality check (===).

## includeDeepOrderedMembers

* **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` is included in `superset` in the same order beginning with the first element in `superset`. Uses a deep equality check.

## notIncludeDeepOrderedMembers

* **Type:** `<T>(superset: T[], subset: T[], message?: string) => void`

Asserts that `subset` isn’t included in `superset` in the same order beginning with the first element in superset. Uses a deep equality check.

* **Type:** `<T>(inList: T, list: T[], message?: string) => void`

Asserts that non-object, non-array value `inList` appears in the flat array `list`.

* **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` changes the `object` of a `property`.

* **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` changes the `object` of a `property` by a `change`.

* **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` does not changes the `object` of a `property`.

* **Type:** `<T>(modifier: Function, object: T, property: string, change:number, message?: string) => void`

Asserts that a `modifier` does not change the `object` of a `property` or of a `modifier` return value by a `change`.

* **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` increases a numeric `object`'s `property`.

* **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` increases a numeric `object`'s `property` or a `modifier` return value by an `change`.

* **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` does not increases a numeric `object`'s `property`.

* **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` does not increases a numeric `object`'s `property` or a `modifier` return value by an `change`.

* **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` decreases a numeric `object`'s `property`.

* **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` decreases a numeric `object`'s `property` or a `modifier` return value by a `change`.

* **Type:** `<T>(modifier: Function, object: T, property: string, message?: string) => void`

Asserts that a `modifier` dose not decrease a numeric `object`'s `property`.

* **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` does not decrease a numeric `object`'s `property` or a `modifier` return value by a `change`.

* **Type:** `<T>(modifier: Function, object: T, property: string, change: number, message?: string) => void`

Asserts that a `modifier` does not decrease a numeric `object`'s `property` or a `modifier` return value by a `change`.

* **Type:** `<T>(object: T, message?: string) => void`

Asserts if `object` is not a false value, and throws if it is a true value. This is added to allow for chai to be a drop-in replacement for Node’s assert class.

* **Type:** `<T>(object: T, message?: string) => void`
* **Alias:** `extensible`

Asserts that `object` is extensible (can have new properties added to it).

* **Type:** `<T>(object: T, message?: string) => void`
* **Alias:** `notExtensible`

Asserts that `object` is not extensible (can not have new properties added to it).

* **Type:** `<T>(object: T, message?: string) => void`
* **Alias:** `sealed`

Asserts that `object` is sealed (cannot have new properties added to it and its existing properties cannot be removed).

* **Type:** `<T>(object: T, message?: string) => void`
* **Alias:** `notSealed`

Asserts that `object` is not sealed (can have new properties added to it and its existing properties can be removed).

* **Type:** `<T>(object: T, message?: string) => void`
* **Alias:** `frozen`

Asserts that object is frozen (cannot have new properties added to it and its existing properties cannot be modified).

* **Type:** `<T>(object: T, message?: string) => void`
* **Alias:** `notFrozen`

Asserts that `object` is not frozen (can have new properties added to it and its existing properties can be modified).

* **Type:** `<T>(target: T, message?: string) => void`
* **Alias:** `empty`

Asserts that the `target` does not contain any values. For arrays and strings, it checks the length property. For Map and Set instances, it checks the size property. For non-function objects, it gets the count of its own enumerable string keys.

* **Type:** `<T>(object: T, message?: string) => void`
* **Alias:** `notEmpty`

Asserts that the `target` contains values. For arrays and strings, it checks the length property. For Map and Set instances, it checks the size property. For non-function objects, it gets the count of its own enumerable string keys.

---
url: /guide/browser/assertion-api.md
---

**Examples:**

Example 1 (ts):
```ts
import { assert, test } from 'vitest'

test('assert', () => {
  assert('foo' !== 'bar', 'foo should not be equal to bar')
})
```

Example 2 (ts):
```ts
import { assert, test } from 'vitest'

test('assert.fail', () => {
  assert.fail('error message on failure')
  assert.fail('foo', 'bar', 'foo is not bar', '===')
})
```

Example 3 (ts):
```ts
import { assert, test } from 'vitest'

test('assert.isOk', () => {
  assert.isOk('foo', 'every truthy is ok')
  assert.isOk(false, 'this will fail since false is not truthy')
})
```

Example 4 (ts):
```ts
import { assert, test } from 'vitest'

test('assert.isNotOk', () => {
  assert.isNotOk('foo', 'this will fail, every truthy is not ok')
  assert.isNotOk(false, 'this will pass since false is falsy')
})
```

---

## TestSpecification

**URL:** llms-txt#testspecification

**Contents:**
- taskId
- project
- moduleId
- testModule
- pool experimental {#pool}
- testLines
- toJSON

The `TestSpecification` class describes what module to run as a test and its parameters.

You can only create a specification by calling [`createSpecification`](/advanced/api/test-project#createspecification) method on a test project:

`createSpecification` expects resolved module ID. It doesn't auto-resolve the file or check that it exists on the file system.

[Test module's](/advanced/api/test-suite#id) identifier.

This references the [`TestProject`](/advanced/api/test-project) that the test module belongs to.

The ID of the module in Vite's module graph. Usually, it's an absolute file path using posix separator:

Instance of [`TestModule`](/advanced/api/test-module) associated with the specification. If test wasn't queued yet, this will be `undefined`.

## pool experimental {#pool}

The [`pool`](/config/#pool) in which the test module will run.

::: danger
It's possible to have multiple pools in a single test project with [`poolMatchGlob`](/config/#poolmatchglob) and [`typecheck.enabled`](/config/#typecheck-enabled). This means it's possible to have several specifications with the same `moduleId` but different `pool`. In Vitest 4, the project will only support a single pool, and this property will be removed.
:::

This is an array of lines in the source code where the test files are defined. This field is defined only if the `createSpecification` method received an array.

Note that if there is no test on at least one of the lines, the whole suite will fail. An example of a correct `testLines` configuration:

`toJSON` generates a JSON-friendly object that can be consumed by the [Browser Mode](/guide/browser/) or [Vitest UI](/guide/ui).

---
url: /advanced/api/test-suite.md
---

**Examples:**

Example 1 (ts):
```ts
const specification = project.createSpecification(
  resolve('./example.test.ts'),
  [20, 40], // optional test lines
)
```

Example 2 (ts):
```ts
'C:/Users/Documents/project/example.test.ts' // ✅
'/Users/mac/project/example.test.ts' // ✅
'C:\\Users\\Documents\\project\\example.test.ts' // ❌
```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
:::

## toJSON
```

---

## Assertion API

**URL:** llms-txt#assertion-api

**Contents:**
- toBeDisabled
- toBeEnabled
- toBeEmptyDOMElement
- toBeInTheDocument
- toBeInvalid
- toBeRequired
- toBeValid
- toBeVisible
- toBeInViewport
- toContainElement

Vitest provides a wide range of DOM assertions out of the box forked from [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) library with the added support for locators and built-in retry-ability.

::: tip TypeScript Support
If you are using [TypeScript](/guide/browser/#typescript) or want to have correct type hints in `expect`, make sure you have `vitest/browser` referenced somewhere. If you never imported from there, you can add a `reference` comment in any file that's covered by your `tsconfig.json`:

Tests in the browser might fail inconsistently due to their asynchronous nature. Because of this, it is important to have a way to guarantee that assertions succeed even if the condition is delayed (by a timeout, network request, or animation, for example). For this purpose, Vitest provides retriable assertions out of the box via the [`expect.poll`](/api/expect#poll) and `expect.element` APIs:

We recommend to always use `expect.element` when working with `page.getBy*` locators to reduce test flakiness. Note that `expect.element` accepts a second option:

::: tip
`expect.element` is a shorthand for `expect.poll(() => element)` and works in exactly the same way.

`toHaveTextContent` and all other assertions are still available on a regular `expect` without a built-in retry-ability mechanism:

Allows you to check whether an element is disabled from the user's perspective.

Matches if the element is a form control and the `disabled` attribute is specified on this element or the
element is a descendant of a form element with a `disabled` attribute.

Note that only native control elements such as HTML `button`, `input`, `select`, `textarea`, `option`, `optgroup`
can be disabled by setting "disabled" attribute. "disabled" attribute on other elements is ignored, unless it's a custom element.

Allows you to check whether an element is not disabled from the user's perspective.

Works like [`not.toBeDisabled()`](#tobedisabled). Use this matcher to avoid double negation in your tests.

## toBeEmptyDOMElement

This allows you to assert whether an element has no visible content for the user. It ignores comments but will fail if the element contains white-space.

Assert whether an element is present in the document or not.

::: warning
This matcher does not find detached elements. The element must be added to the document to be found by `toBeInTheDocument`. If you desire to search in a detached element, please use: [`toContainElement`](#tocontainelement).
:::

This allows you to check if an element, is currently invalid.

An element is invalid if it has an [`aria-invalid` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) with no value or a value of `"true"`, or if the result of [`checkValidity()`](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) is `false`.

This allows you to check if a form element is currently required.

An element is required if it is having a `required` or `aria-required="true"` attribute.

This allows you to check if the value of an element, is currently valid.

An element is valid if it has no [`aria-invalid` attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) or an attribute value of "false". The result of [`checkValidity()`](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) must also be `true` if it's a form element.

This allows you to check if an element is currently visible to the user.

Element is considered visible when it has non-empty bounding box and does not have `visibility:hidden` computed style.

Note that according to this definition:

* Elements of zero size **are not** considered visible.
* Elements with `display:none` **are not** considered visible.
* Elements with `opacity:0` **are** considered visible.

To check that at least one element from the list is visible, use `locator.first()`.

This allows you to check if an element is currently in viewport with [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

You can pass `ratio` argument as option, which means the minimal ratio of the element should be in viewport. `ratio` should be in 0~1.

This allows you to assert whether an element contains another element as a descendant or not.

Assert whether a string representing a HTML element is contained in another element. The string should contain valid html, and not any incomplete html.

::: warning
Chances are you probably do not need to use this matcher. We encourage testing from the perspective of how the user perceives the app in a browser. That's why testing against a specific DOM structure is not advised.

It could be useful in situations where the code being tested renders html that was obtained from an external source, and you want to validate that that html code was used as intended.

It should not be used to check DOM structure that you control. Please, use [`toContainElement`](#tocontainelement) instead.
:::

## toHaveAccessibleDescription

This allows you to assert that an element has the expected
[accessible description](https://w3c.github.io/accname/).

You can pass the exact string of the expected accessible description, or you can
make a partial match passing a regular expression, or by using
[`expect.stringContaining`](/api/expect#expect-stringcontaining) or [`expect.stringMatching`](/api/expect#expect-stringmatching).

## toHaveAccessibleErrorMessage

This allows you to assert that an element has the expected
[accessible error message](https://w3c.github.io/aria/#aria-errormessage).

You can pass the exact string of the expected accessible error message.
Alternatively, you can perform a partial match by passing a regular expression
or by using
[`expect.stringContaining`](/api/expect#expect-stringcontaining) or [`expect.stringMatching`](/api/expect#expect-stringmatching).

## toHaveAccessibleName

This allows you to assert that an element has the expected
[accessible name](https://w3c.github.io/accname/). It is useful, for instance,
to assert that form elements and buttons are properly labelled.

You can pass the exact string of the expected accessible name, or you can make a
partial match passing a regular expression, or by using
[`expect.stringContaining`](/api/expect#expect-stringcontaining) or [`expect.stringMatching`](/api/expect#expect-stringmatching).

This allows you to check whether the given element has an attribute or not. You
can also optionally check that the attribute has a specific expected value or
partial match using [`expect.stringContaining`](/api/expect#expect-stringcontaining) or [`expect.stringMatching`](/api/expect#expect-stringmatching).

This allows you to check whether the given element has certain classes within
its `class` attribute. You must provide at least one class, unless you are
asserting that an element does not have any classes.

The list of class names may include strings and regular expressions. Regular
expressions are matched against each individual class in the target element, and
it is NOT matched against its full `class` attribute value as whole.

::: warning
Note that you cannot use `exact: true` option when only regular expressions are provided.
:::

This allows you to assert whether an element has focus or not.

This allows you to check if a form or fieldset contains form controls for each given name, and having the specified value.

::: tip
It is important to stress that this matcher can only be invoked on a [form](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement) or a [fieldset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement) element.

This allows it to take advantage of the [`.elements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements) property in `form` and `fieldset` to reliably fetch all form controls within them.

This also avoids the possibility that users provide a container that contains more than one `form`, thereby intermixing form controls that are not related, and could even conflict with one another.
:::

This matcher abstracts away the particularities with which a form control value
is obtained depending on the type of form control. For instance, `<input>`
elements have a `value` attribute, but `<select>` elements do not. Here's a list
of all cases covered:

* `<input type="number">` elements return the value as a **number**, instead of
  a string.
* `<input type="checkbox">` elements:
  * if there's a single one with the given `name` attribute, it is treated as a
    **boolean**, returning `true` if the checkbox is checked, `false` if
    unchecked.
  * if there's more than one checkbox with the same `name` attribute, they are
    all treated collectively as a single form control, which returns the value
    as an **array** containing all the values of the selected checkboxes in the
    collection.
* `<input type="radio">` elements are all grouped by the `name` attribute, and
  such a group treated as a single form control. This form control returns the
  value as a **string** corresponding to the `value` attribute of the selected
  radio button within the group.
* `<input type="text">` elements return the value as a **string**. This also
  applies to `<input>` elements having any other possible `type` attribute
  that's not explicitly covered in different rules above (e.g. `search`,
  `email`, `date`, `password`, `hidden`, etc.)
* `<select>` elements without the `multiple` attribute return the value as a
  **string** corresponding to the `value` attribute of the selected `option`, or
  `undefined` if there's no selected option.
* `<select multiple>` elements return the value as an **array** containing all
  the values of the [selected options](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions).
* `<textarea>` elements return their value as a **string**. The value
  corresponds to their node content.

The above rules make it easy, for instance, to switch from using a single select
control to using a group of radio buttons. Or to switch from a multi select
control, to using a group of checkboxes. The resulting set of form values used
by this matcher to compare against would be the same.

This allows you to check if a certain element has some specific css properties
with specific values applied. It matches only if the element has *all* the
expected properties applied, not just some of them.

This also works with rules that are applied to the element via a class name for
which some rules are defined in a stylesheet currently active in the document.
The usual rules of css precedence apply.

This allows you to check whether the given node has a text content or not. This
supports elements, but also text nodes and fragments.

When a `string` argument is passed through, it will perform a partial
case-sensitive match to the node content.

To perform a case-insensitive match, you can use a `RegExp` with the `/i`
modifier.

If you want to match the whole content, you can use a `RegExp` to do it.

This allows you to check whether the given form element has the specified value.
It accepts `<input>`, `<select>` and `<textarea>` elements with the exception of
`<input type="checkbox">` and `<input type="radio">`, which can be meaningfully
matched only using [`toBeChecked`](#tobechecked) or
[`toHaveFormValues`](#tohaveformvalues).

It also accepts elements with roles `meter`, `progressbar`, `slider` or
`spinbutton` and checks their `aria-valuenow` attribute (as a number).

For all other form elements, the value is matched using the same algorithm as in
[`toHaveFormValues`](#tohaveformvalues) does.

## toHaveDisplayValue

This allows you to check whether the given form element has the specified
displayed value (the one the end user will see). It accepts `<input>`,
`<select>` and `<textarea>` elements with the exception of
`<input type="checkbox">` and `<input type="radio">`, which can be meaningfully
matched only using [`toBeChecked`](#tobechecked) or
[`toHaveFormValues`](#tohaveformvalues).

This allows you to check whether the given element is checked. It accepts an
`input` of type `checkbox` or `radio` and elements with a `role` of `checkbox`,
`radio` or `switch` with a valid `aria-checked` attribute of `"true"` or
`"false"`.

## toBePartiallyChecked

This allows you to check whether the given element is partially checked. It
accepts an `input` of type `checkbox` and elements with a `role` of `checkbox`
with a `aria-checked="mixed"`, or `input` of type `checkbox` with
`indeterminate` set to `true`

This allows you to assert that an element has the expected [role](https://www.w3.org/TR/html-aria/#docconformance).

This is useful in cases where you already have access to an element via some query other than the role itself, and want to make additional assertions regarding its accessibility.

The role can match either an explicit role (via the `role` attribute), or an implicit one via the [implicit ARIA semantics](https://www.w3.org/TR/html-aria/#docconformance).

::: warning
Roles are matched literally by string equality, without inheriting from the ARIA role hierarchy. As a result, querying a superclass role like `checkbox` will not include elements with a subclass role like `switch`.

Also note that unlike `testing-library`, Vitest ignores all custom roles except the first valid one, following Playwright's behaviour:

This allows to assert that an element has a
[text selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection).

This is useful to check if text or part of the text is selected within an
element. The element can be either an input of type text, a textarea, or any
other element that contains text, such as a paragraph, span, div etc.

::: warning
The expected selection is a string, it does not allow to check for
selection range indices.
:::

## toMatchScreenshot experimental {#tomatchscreenshot}

::: tip
The `toMatchScreenshot` assertion can be configured globally in your
[Vitest config](/guide/browser/config#browser-expect-tomatchscreenshot).
:::

This assertion allows you to perform visual regression testing by comparing
screenshots of elements or pages against stored reference images.

When differences are detected beyond the configured threshold, the test fails.
To help identify the changes, the assertion generates:

* The actual screenshot captured during the test
* The expected reference screenshot
* A diff image highlighting the differences (when possible)

::: warning Screenshots Stability
The assertion automatically retries taking screenshots until two consecutive
captures yield the same result. This helps reduce flakiness caused by
animations, loading states, or other dynamic content. You can control this
behavior with the `timeout` option.

However, browser rendering can vary across:

* Different browsers and browser versions
* Operating systems (Windows, macOS, Linux)
* Screen resolutions and pixel densities
* GPU drivers and hardware acceleration
* Font rendering and system fonts

It is recommended to read the
[Visual Regression Testing guide](/guide/browser/visual-regression-testing) to
implement this testing strategy efficiently.
:::

::: tip
When a screenshot comparison fails due to **intentional changes**, you can
update the reference screenshot by pressing the `u` key in watch mode, or by
running tests with the `-u` or `--update` flags.
:::

* `comparatorName: "pixelmatch" = "pixelmatch"`

The name of the algorithm/library used for comparing images.

Currently, [`"pixelmatch"`](https://github.com/mapbox/pixelmatch) is the only
  supported comparator.

* `comparatorOptions: object`

These options allow changing the behavior of the comparator. What properties
  can be set depends on the chosen comparator algorithm.

Vitest has set default values out of the box, but they can be overridden.

* [`"pixelmatch"` options](#pixelmatch-comparator-options)

::: warning
  **Always explicitly set `comparatorName` to get proper type inference for
  `comparatorOptions`**.

Without it, TypeScript won't know which options are valid:

* `screenshotOptions: object`

The same options allowed by
  [`locator.screenshot()`](/guide/browser/locators.html#screenshot), except for:

* `'base64'`
  * `'path'`
  * `'save'`
  * `'type'`

* `timeout: number = 5_000`

Time to wait until a stable screenshot is found.

Setting this value to `0` disables the timeout, but if a stable screenshot
  can't be determined the process will not end.

#### `"pixelmatch"` comparator options

The following options are available when using the `"pixelmatch"` comparator:

* `allowedMismatchedPixelRatio: number | undefined = undefined`

The maximum allowed ratio of differing pixels between the captured screenshot
  and the reference image.

Must be a value between `0` and `1`.

For example, `allowedMismatchedPixelRatio: 0.02` means the test will pass
  if up to 2% of pixels differ, but fail if more than 2% differ.

* `allowedMismatchedPixels: number | undefined = undefined`

The maximum number of pixels that are allowed to differ between the captured
  screenshot and the stored reference image.

If set to `undefined`, any non-zero difference will cause the test to fail.

For example, `allowedMismatchedPixels: 10` means the test will pass if 10 or
  fewer pixels differ, but fail if 11 or more differ.

* `threshold: number = 0.1`

Acceptable perceived color difference between the same pixel in two images.

Value ranges from `0` (strict) to `1` (very lenient). Lower values mean small
  differences will be detected.

The comparison uses the [YIQ color space](https://en.wikipedia.org/wiki/YIQ).

* `includeAA: boolean = false`

If `true`, disables detection and ignoring of anti-aliased pixels.

* `alpha: number = 0.1`

Blending level of unchanged pixels in the diff image.

Ranges from `0` (white) to `1` (original brightness).

* `aaColor: [r: number, g: number, b: number] = [255, 255, 0]`

Color used for anti-aliased pixels in the diff image.

* `diffColor: [r: number, g: number, b: number] = [255, 0, 0]`

Color used for differing pixels in the diff image.

* `diffColorAlt: [r: number, g: number, b: number] | undefined = undefined`

Optional alternative color for dark-on-light differences, to help show what's
  added vs. removed.

If not set, `diffColor` is used for all differences.

* `diffMask: boolean = false`

If `true`, shows only the diff as a mask on a transparent background, instead
  of overlaying it on the original image.

Anti-aliased pixels won't be shown (if detected).

::: warning
When both `allowedMismatchedPixels` and `allowedMismatchedPixelRatio` are set,
the more restrictive value is used.

For example, if you allow 100 pixels or 2% ratio, and your image has 10,000
pixels, the effective limit would be 100 pixels instead of 200.
:::

---
url: /api/assert-type.md
---

**Examples:**

Example 1 (ts):
```ts
/// <reference types="vitest/browser" />
```

Example 2 (ts):
```ts
import { expect, test } from 'vitest'
import { page } from 'vitest/browser'

test('error banner is rendered', async () => {
  triggerError()

  // This creates a locator that will try to find the element
  // when any of its methods are called.
  // This call by itself doesn't check the existence of the element.
  const banner = page.getByRole('alert', {
    name: /error/i,
  })

  // Vitest provides `expect.element` with built-in retry-ability
  // It will repeatedly check that the element exists in the DOM and that
  // the content of `element.textContent` is equal to "Error!"
  // until all the conditions are met
  await expect.element(banner).toHaveTextContent('Error!')
})
```

Example 3 (ts):
```ts
interface ExpectPollOptions {
  // The interval to retry the assertion for in milliseconds
  // Defaults to "expect.poll.interval" config option
  interval?: number
  // Time to retry the assertion for in milliseconds
  // Defaults to "expect.poll.timeout" config option
  timeout?: number
  // The message printed when the assertion fails
  message?: string
}
```

Example 4 (ts):
```ts
// will fail immediately if .textContent is not `'Error!'`
expect(banner).toHaveTextContent('Error!')
```

---

## Coverage

**URL:** llms-txt#coverage

**Contents:**
- Coverage Providers
- V8 Provider
- Istanbul provider
- Coverage Setup
- Including and excluding files from coverage report
- Custom Coverage Reporter
- Custom Coverage Provider
- Ignoring Code
  - Examples
- Coverage Performance

Vitest supports Native code coverage via [`v8`](https://v8.dev/blog/javascript-code-coverage) and instrumented code coverage via [`istanbul`](https://istanbul.js.org/).

## Coverage Providers

Both `v8` and `istanbul` support are optional. By default, `v8` will be used.

You can select the coverage tool by setting `test.coverage.provider` to `v8` or `istanbul`:

When you start the Vitest process, it will prompt you to install the corresponding support package automatically.

Or if you prefer to install them manually:

::: info
The description of V8 coverage below is Vitest specific and does not apply to other test runners.
Since `v3.2.0` Vitest has used [AST based coverage remapping](/blog/vitest-3-2#coverage-v8-ast-aware-remapping) for V8 coverage, which produces identical coverage reports to Istanbul.

This allows users to have the speed of V8 coverage with accuracy of Istanbul coverage.
:::

By default Vitest uses `'v8'` coverage provider.
This provider requires Javascript runtime that's implemented on top of [V8 engine](https://v8.dev/), such as NodeJS, Deno or any Chromium based browsers such as Google Chrome.

Coverage collection is performed during runtime by instructing V8 using [`node:inspector`](https://nodejs.org/api/inspector.html) and [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/tot/Profiler/) in browsers. User's source files can be executed as-is without any pre-instrumentation steps.

* ✅ Recommended option to use
* ✅ No pre-transpile step. Test files can be executed as-is.
* ✅ Faster execute times than Istanbul.
* ✅ Lower memory usage than Istanbul.
* ✅ Coverage report accuracy is as good as with Istanbul ([since Vitest `v3.2.0`](/blog/vitest-3-2#coverage-v8-ast-aware-remapping)).
* ⚠️ In some cases can be slower than Istanbul, e.g. when loading lots of different modules. V8 does not support limiting coverage collection to specific modules.
* ⚠️ There are some minor limitations set by V8 engine. See [`ast-v8-to-istanbul` | Limitations](https://github.com/AriPerkkio/ast-v8-to-istanbul?tab=readme-ov-file#limitations).
* ❌ Does not work on environments that don't use V8, such as Firefox or Bun. Or on environments that don't expose V8 coverage via profiler, such as Cloudflare Workers.

[Istanbul code coverage tooling](https://istanbul.js.org/) has existed since 2012 and is very well battle-tested.
This provider works on any Javascript runtime as coverage tracking is done by instrumenting user's source files.

In practice, instrumenting source files means adding additional Javascript in user's files:

* ✅ Works on any Javascript runtime
* ✅ Widely used and battle-tested for over 13 years.
* ✅ In some cases faster than V8. Coverage instrumentation can be limited to specific files, as opposed to V8 where all modules are instrumented.
* ❌ Requires pre-instrumentation step
* ❌ Execution speed is slower than V8 due to instrumentation overhead
* ❌ Instrumentation increases file sizes
* ❌ Memory usage is higher than V8

::: tip
All coverage options are listed in [Coverage Config Reference](/config/#coverage).
:::

To test with coverage enabled, you can pass the `--coverage` flag in CLI or set `coverage.enabled` in `vitest.config.ts`:

## Including and excluding files from coverage report

You can define what files are shown in coverage report by configuring [`coverage.include`](/config/#coverage-include) and [`coverage.exclude`](/config/#coverage-exclude).

By default Vitest will show only files that were imported during test run.
To include uncovered files in the report, you'll need to configure [`coverage.include`](/config/#coverage-include) with a pattern that will pick your source files:

To exclude files that are matching `coverage.include`, you can define an additional [`coverage.exclude`](/config/#coverage-exclude):

## Custom Coverage Reporter

You can use custom coverage reporters by passing either the name of the package or absolute path in `test.coverage.reporter`:

Custom reporters are loaded by Istanbul and must match its reporter interface. See [built-in reporters' implementation](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib) for reference.

## Custom Coverage Provider

It's also possible to provide your custom coverage provider by passing `'custom'` in `test.coverage.provider`:

The custom providers require a `customProviderModule` option which is a module name or path where to load the `CoverageProviderModule` from. It must export an object that implements `CoverageProviderModule` as default export:

Please refer to the type definition for more details.

Both coverage providers have their own ways how to ignore code from coverage reports:

* [`v8`](https://github.com/AriPerkkio/ast-v8-to-istanbul?tab=readme-ov-file#ignoring-code)
* [`istanbul`](https://github.com/istanbuljs/nyc#parsing-hints-ignoring-lines)

When using TypeScript the source codes are transpiled using `esbuild`, which strips all comments from the source codes ([esbuild#516](https://github.com/evanw/esbuild/issues/516)).
Comments which are considered as [legal comments](https://esbuild.github.io/api/#legal-comments) are preserved.

You can include a `@preserve` keyword in the ignore hint.
Beware that these ignore hints may now be included in final production build as well.

## Coverage Performance

If code coverage generation is slow on your project, see [Profiling Test Performance | Code coverage](/guide/profiling-test-performance.html#code-coverage).

You can check your coverage report in [Vitest UI](/guide/ui).

Vitest UI will enable coverage report when it is enabled explicitly and the html coverage reporter is present, otherwise it will not be available:

* enable `coverage.enabled=true` in your configuration file or run Vitest with `--coverage.enabled=true` flag
* add `html` to the `coverage.reporter` list: you can also enable `subdir` option to put coverage report in a subdirectory

---
url: /advanced/pool.md
---

**Examples:**

Example 1 (unknown):
```unknown
When you start the Vitest process, it will prompt you to install the corresponding support package automatically.

Or if you prefer to install them manually:

::: code-group
```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown
:::

## V8 Provider

::: info
The description of V8 coverage below is Vitest specific and does not apply to other test runners.
Since `v3.2.0` Vitest has used [AST based coverage remapping](/blog/vitest-3-2#coverage-v8-ast-aware-remapping) for V8 coverage, which produces identical coverage reports to Istanbul.

This allows users to have the speed of V8 coverage with accuracy of Istanbul coverage.
:::

By default Vitest uses `'v8'` coverage provider.
This provider requires Javascript runtime that's implemented on top of [V8 engine](https://v8.dev/), such as NodeJS, Deno or any Chromium based browsers such as Google Chrome.

Coverage collection is performed during runtime by instructing V8 using [`node:inspector`](https://nodejs.org/api/inspector.html) and [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/tot/Profiler/) in browsers. User's source files can be executed as-is without any pre-instrumentation steps.

* ✅ Recommended option to use
* ✅ No pre-transpile step. Test files can be executed as-is.
* ✅ Faster execute times than Istanbul.
* ✅ Lower memory usage than Istanbul.
* ✅ Coverage report accuracy is as good as with Istanbul ([since Vitest `v3.2.0`](/blog/vitest-3-2#coverage-v8-ast-aware-remapping)).
* ⚠️ In some cases can be slower than Istanbul, e.g. when loading lots of different modules. V8 does not support limiting coverage collection to specific modules.
* ⚠️ There are some minor limitations set by V8 engine. See [`ast-v8-to-istanbul` | Limitations](https://github.com/AriPerkkio/ast-v8-to-istanbul?tab=readme-ov-file#limitations).
* ❌ Does not work on environments that don't use V8, such as Firefox or Bun. Or on environments that don't expose V8 coverage via profiler, such as Cloudflare Workers.

## Istanbul provider

[Istanbul code coverage tooling](https://istanbul.js.org/) has existed since 2012 and is very well battle-tested.
This provider works on any Javascript runtime as coverage tracking is done by instrumenting user's source files.

In practice, instrumenting source files means adding additional Javascript in user's files:
```

Example 4 (unknown):
```unknown
* ✅ Works on any Javascript runtime
* ✅ Widely used and battle-tested for over 13 years.
* ✅ In some cases faster than V8. Coverage instrumentation can be limited to specific files, as opposed to V8 where all modules are instrumented.
* ❌ Requires pre-instrumentation step
* ❌ Execution speed is slower than V8 due to instrumentation overhead
* ❌ Instrumentation increases file sizes
* ❌ Memory usage is higher than V8

## Coverage Setup

::: tip
All coverage options are listed in [Coverage Config Reference](/config/#coverage).
:::

To test with coverage enabled, you can pass the `--coverage` flag in CLI or set `coverage.enabled` in `vitest.config.ts`:

::: code-group
```

---

## Snapshot

**URL:** llms-txt#snapshot

**Contents:**
- Use Snapshots
- Inline Snapshots
- Updating Snapshots
- File Snapshots
- Visual Snapshots
- Custom Serializer
- Difference from Jest

Learn Snapshot by video from Vue School

Snapshot tests are a very useful tool whenever you want to make sure the output of your functions does not change unexpectedly.

When using snapshot, Vitest will take a snapshot of the given value, then compare it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the result.

To snapshot a value, you can use the [`toMatchSnapshot()`](/api/expect#tomatchsnapshot) from `expect()` API:

The first time this test is run, Vitest creates a snapshot file that looks like this:

The snapshot artifact should be committed alongside code changes, and reviewed as part of your code review process. On subsequent test runs, Vitest will compare the rendered output with the previous snapshot. If they match, the test will pass. If they don't match, either the test runner found a bug in your code that should be fixed, or the implementation has changed and the snapshot needs to be updated.

::: warning
When using Snapshots with async concurrent tests, `expect` from the local [Test Context](/guide/test-context) must be used to ensure the right test is detected.
:::

Similarly, you can use the [`toMatchInlineSnapshot()`](/api/expect#tomatchinlinesnapshot) to store the snapshot inline within the test file.

Instead of creating a snapshot file, Vitest will modify the test file directly to update the snapshot as a string:

This allows you to see the expected output directly without jumping across different files.

::: warning
When using Snapshots with async concurrent tests, `expect` from the local [Test Context](/guide/test-context) must be used to ensure the right test is detected.
:::

## Updating Snapshots

When the received value doesn't match the snapshot, the test fails and shows you the difference between them. When the snapshot change is expected, you may want to update the snapshot from the current state.

In watch mode, you can press the `u` key in the terminal to update the failed snapshot directly.

Or you can use the `--update` or `-u` flag in the CLI to make Vitest update snapshots.

When calling `toMatchSnapshot()`, we store all snapshots in a formatted snap file. That means we need to escape some characters (namely the double-quote `"` and backtick `` ` ``) in the snapshot string. Meanwhile, you might lose the syntax highlighting for the snapshot content (if they are in some language).

In light of this, we introduced [`toMatchFileSnapshot()`](/api/expect#tomatchfilesnapshot) to explicitly match against a file. This allows you to assign any file extension to the snapshot file, and makes them more readable.

It will compare with the content of `./test/basic.output.html`. And can be written back with the `--update` flag.

For visual regression testing of UI components and pages, Vitest provides built-in support through [browser mode](/guide/browser/) with the [`toMatchScreenshot()`](/guide/browser/assertion-api#tomatchscreenshot-experimental) assertion:

This captures screenshots and compares them against reference images to detect unintended visual changes. Learn more in the [Visual Regression Testing guide](/guide/browser/visual-regression-testing).

You can add your own logic to alter how your snapshots are serialized. Like Jest, Vitest has default serializers for built-in JavaScript types, HTML elements, ImmutableJS and for React elements.

You can explicitly add custom serializer by using [`expect.addSnapshotSerializer`](/api/expect#expect-addsnapshotserializer) API.

We also support [snapshotSerializers](/config/#snapshotserializers) option to implicitly add custom serializers.

After adding a test like this:

You will get the following snapshot:

We are using Jest's `pretty-format` for serializing snapshots. You can read more about it here: [pretty-format](https://github.com/facebook/jest/blob/main/packages/pretty-format/README.md#serialize).

## Difference from Jest

Vitest provides an almost compatible Snapshot feature with [Jest's](https://jestjs.io/docs/snapshot-testing) with a few exceptions:

#### 1. Comment header in the snapshot file is different

This does not really affect the functionality but might affect your commit diff when migrating from Jest.

#### 2. `printBasicPrototype` is default to `false`

Both Jest and Vitest's snapshots are powered by [`pretty-format`](https://github.com/facebook/jest/blob/main/packages/pretty-format). In Vitest we set `printBasicPrototype` default to `false` to provide a cleaner snapshot output, while in Jest <29.0.0 it's `true` by default.

We believe this is a more reasonable default for readability and overall DX. If you still prefer Jest's behavior, you can change your config:

#### 3. Chevron `>` is used as a separator instead of colon `:` for custom messages

Vitest uses chevron `>` as a separator instead of colon `:` for readability, when a custom message is passed during creation of a snapshot file.

For the following example test code:

In Jest, the snapshot will be:

In Vitest, the equivalent snapshot will be:

#### 4. default `Error` snapshot is different for `toThrowErrorMatchingSnapshot` and `toThrowErrorMatchingInlineSnapshot`

---
url: /advanced/metadata.md
---

**Examples:**

Example 1 (ts):
```ts
import { expect, it } from 'vitest'

it('toUpperCase', () => {
  const result = toUpperCase('foobar')
  expect(result).toMatchSnapshot()
})
```

Example 2 (js):
```js
// Vitest Snapshot v1, https://vitest.dev/guide/snapshot.html

exports['toUpperCase 1'] = '"FOOBAR"'
```

Example 3 (ts):
```ts
import { expect, it } from 'vitest'

it('toUpperCase', () => {
  const result = toUpperCase('foobar')
  expect(result).toMatchInlineSnapshot()
})
```

Example 4 (ts):
```ts
import { expect, it } from 'vitest'

it('toUpperCase', () => {
  const result = toUpperCase('foobar')
  expect(result).toMatchInlineSnapshot('"FOOBAR"')
})
```

---

## Component Testing

**URL:** llms-txt#component-testing

**Contents:**
- Why Component Testing?
- Browser Mode for Component Testing
  - Why Browser Mode?
  - Purpose of this Guide
- What Makes a Good Component Test
  - Component Testing Hierarchy
- Component Testing Strategies
  - Isolation Strategy
  - Integration Strategy
- Testing Library Integration

Component testing is a testing strategy that focuses on testing individual UI components in isolation. Unlike end-to-end tests that test entire user flows, component tests verify that each component works correctly on its own, making them faster to run and easier to debug.

Vitest provides comprehensive support for component testing across multiple frameworks including Vue, React, Svelte, Lit, Preact, Qwik, Solid, Marko, and more. This guide covers the specific patterns, tools, and best practices for testing components effectively with Vitest.

## Why Component Testing?

Component testing sits between unit tests and end-to-end tests, offering several advantages:

* **Faster feedback** - Test individual components without loading entire applications
* **Isolated testing** - Focus on component behavior without external dependencies
* **Better debugging** - Easier to pinpoint issues in specific components
* **Comprehensive coverage** - Test edge cases and error states more easily

## Browser Mode for Component Testing

Component testing in Vitest uses **Browser Mode** to run tests in real browser environments using Playwright, WebdriverIO, or preview mode. This provides the most accurate testing environment as your components run in real browsers with actual DOM implementations, CSS rendering, and browser APIs.

### Why Browser Mode?

Browser Mode is the recommended approach for component testing because it provides the most accurate testing environment. Unlike DOM simulation libraries, Browser Mode catches real-world issues that can affect your users.

::: tip
Browser Mode catches issues that DOM simulation libraries might miss, including:

* CSS layout and styling problems
* Real browser API behavior
* Accurate event handling and propagation
* Proper focus management and accessibility features

### Purpose of this Guide

This guide focuses specifically on **component testing patterns and best practices** using Vitest's capabilities. While many examples use Browser Mode (as it's the recommended approach), the focus here is on component-specific testing strategies rather than browser configuration details.

For detailed browser setup, configuration options, and advanced browser features, refer to the [Browser Mode documentation](/guide/browser/).

## What Makes a Good Component Test

Good component tests focus on **behavior and user experience** rather than implementation details:

* **Test the contract** - How components receive inputs (props) and produce outputs (events, renders)
* **Test user interactions** - Clicks, form submissions, keyboard navigation
* **Test edge cases** - Error states, loading states, empty states
* **Avoid testing internals** - State variables, private methods, CSS classes

### Component Testing Hierarchy

## Component Testing Strategies

### Isolation Strategy

Test components in isolation by mocking dependencies:

### Integration Strategy

Test component collaboration and data flow:

## Testing Library Integration

While Vitest provides official packages for popular frameworks ([`vitest-browser-vue`](https://www.npmjs.com/package/vitest-browser-vue), [`vitest-browser-react`](https://www.npmjs.com/package/vitest-browser-react), [`vitest-browser-svelte`](https://www.npmjs.com/package/vitest-browser-svelte)), you can integrate with [Testing Library](https://testing-library.com/) for frameworks not yet officially supported.

### When to Use Testing Library

* Your framework doesn't have an official Vitest browser package yet
* You're migrating existing tests that use Testing Library
* You prefer Testing Library's API for specific testing scenarios

### Integration Pattern

The key is using `page.elementLocator()` to bridge Testing Library's DOM output with Vitest's browser mode APIs:

### Available Testing Library Packages

Popular Testing Library packages that work well with Vitest:

* [`@testing-library/solid`](https://github.com/solidjs/solid-testing-library) - For Solid.js
* [`@marko/testing-library`](https://testing-library.com/docs/marko-testing-library/intro) - For Marko
* [`@testing-library/svelte`](https://testing-library.com/docs/svelte-testing-library/intro) - Alternative to [`vitest-browser-svelte`](https://www.npmjs.com/package/vitest-browser-svelte)
* [`@testing-library/vue`](https://testing-library.com/docs/vue-testing-library/intro) - Alternative to [`vitest-browser-vue`](https://www.npmjs.com/package/vitest-browser-vue)

::: tip Migration Path
If your framework gets official Vitest support later, you can gradually migrate by replacing Testing Library's `render` function while keeping most of your test logic intact.
:::

### 1. Use Browser Mode for CI/CD

Ensure tests run in real browser environments for the most accurate testing. Browser Mode provides accurate CSS rendering, real browser APIs, and proper event handling.

### 2. Test User Interactions

Simulate real user behavior using Vitest's [Interactivity API](/guide/browser/interactivity-api). Use `page.getByRole()` and `userEvent` methods as shown in our [Advanced Testing Patterns](#advanced-testing-patterns):

### 3. Test Accessibility

Ensure components work for all users by testing keyboard navigation, focus management, and ARIA attributes. See our [Testing Accessibility](#testing-accessibility) example for practical patterns:

### 4. Mock External Dependencies

Focus tests on component logic by mocking APIs and external services. This makes tests faster and more reliable. See our [Isolation Strategy](#isolation-strategy) for examples:

### 5. Use Meaningful Test Descriptions

Write test descriptions that explain the expected behavior, not implementation details:

## Advanced Testing Patterns

### Testing Component State Management

### Testing Async Components with Data Fetching

### Testing Component Communication

### Testing Complex Forms with Validation

### Testing Error Boundaries

### Testing Accessibility

## Debugging Component Tests

### 1. Use Browser Dev Tools

Browser Mode runs tests in real browsers, giving you access to full developer tools. When tests fail, you can:

* **Open browser dev tools** during test execution (F12 or right-click → Inspect)
* **Set breakpoints** in your test code or component code
* **Inspect the DOM** to see the actual rendered output
* **Check console errors** for JavaScript errors or warnings
* **Monitor network requests** to debug API calls

For headful mode debugging, add `headless: false` to your browser config temporarily.

### 2. Add Debug Statements

Use strategic logging to understand test failures:

### 3. Inspect Rendered Output

When components don't render as expected, investigate systematically:

**Use Vitest's browser UI:**

* Run tests with browser mode enabled
* Open the browser URL shown in the terminal to see tests running
* Visual inspection helps identify CSS issues, layout problems, or missing elements

**Test element queries:**

### 4. Verify Selectors

Selector issues are common causes of test failures. Debug them systematically:

**Check accessible names:**

**Test different query strategies:**

**Common selector debugging patterns:**

### 5. Debugging Async Issues

Component tests often involve timing issues:

## Migration from Other Testing Frameworks

### From Jest + Testing Library

Most Jest + Testing Library tests work with minimal changes:

* Use `await expect.element()` instead of `expect()` for DOM assertions
* Use `vitest/browser` for user interactions instead of `@testing-library/user-event`
* Browser Mode provides real browser environment for accurate testing

* [Browser Mode Documentation](/guide/browser/)
* [Assertion API](/guide/browser/assertion-api)
* [Interactivity API](/guide/browser/interactivity-api)
* [Example Repository](https://github.com/vitest-tests/browser-examples)

---
url: /guide/browser/playwright.md
---

**Examples:**

Example 1 (unknown):
```unknown
1. Critical User Paths → Always test these
2. Error Handling      → Test failure scenarios
3. Edge Cases          → Empty data, extreme values
4. Accessibility       → Screen readers, keyboard nav
5. Performance         → Large datasets, animations
```

Example 2 (tsx):
```tsx
// For API requests, we recommend MSW (Mock Service Worker)
// See: https://vitest.dev/guide/mocking/requests
//
// vi.mock(import('../api/userService'), () => ({
//   fetchUser: vi.fn().mockResolvedValue({ name: 'John' })
// }))

// Mock child components to focus on parent logic
vi.mock(import('../components/UserCard'), () => ({
  default: vi.fn(({ user }) => `<div>User: ${user.name}</div>`)
}))

test('UserProfile handles loading and data states', async () => {
  const { getByText } = render(<UserProfile userId="123" />)

  // Test loading state
  await expect.element(getByText('Loading...')).toBeInTheDocument()

  // Test for data to load (expect.element auto-retries)
  await expect.element(getByText('User: John')).toBeInTheDocument()
})
```

Example 3 (tsx):
```tsx
test('ProductList filters and displays products correctly', async () => {
  const mockProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Book', category: 'Education', price: 29 }
  ]

  const { getByLabelText, getByText } = render(
    <ProductList products={mockProducts} />
  )

  // Initially shows all products
  await expect.element(getByText('Laptop')).toBeInTheDocument()
  await expect.element(getByText('Book')).toBeInTheDocument()

  // Filter by category
  await userEvent.selectOptions(
    getByLabelText(/category/i),
    'Electronics'
  )

  // Only electronics should remain
  await expect.element(getByText('Laptop')).toBeInTheDocument()
  await expect.element(queryByText('Book')).not.toBeInTheDocument()
})
```

Example 4 (jsx):
```jsx
// For Solid.js components
import { render } from '@testing-library/solid'
import { page } from 'vitest/browser'

test('Solid component handles user interaction', async () => {
  // Use Testing Library to render the component
  const { baseElement, getByRole } = render(() =>
    <Counter initialValue={0} />
  )

  // Bridge to Vitest's browser mode for interactions and assertions
  const screen = page.elementLocator(baseElement)

  // Use Vitest's page queries for finding elements
  const incrementButton = screen.getByRole('button', { name: /increment/i })

  // Use Vitest's assertions and interactions
  await expect.element(screen.getByText('Count: 0')).toBeInTheDocument()

  // Trigger user interaction using Vitest's page API
  await incrementButton.click()

  await expect.element(screen.getByText('Count: 1')).toBeInTheDocument()
})
```

---

## expectTypeOf

**URL:** llms-txt#expecttypeof

**Contents:**
- not
- toEqualTypeOf
- toMatchTypeOf
- toExtend
- toMatchObjectType
- extract
- exclude
- returns
- parameters
- parameter

::: warning
During runtime this function doesn't do anything. To [enable typechecking](/guide/testing-types#run-typechecking), don't forget to pass down `--typecheck` flag.
:::

* **Type:** `<T>(a: unknown) => ExpectTypeOf`

* **Type:** `ExpectTypeOf`

You can negate all assertions, using `.not` property.

* **Type:** `<T>(expected: T) => void`

This matcher will check if the types are fully equal to each other. This matcher will not fail if two objects have different values, but the same type. It will fail however if an object is missing a property.

* **Type:** `<T>(expected: T) => void`

::: warning DEPRECATED
This matcher has been deprecated since expect-type v1.2.0. Use [`toExtend`](#toextend) instead.
:::
This matcher checks if expect type extends provided type. It is different from `toEqual` and is more similar to [expect's](/api/expect) `toMatchObject()`. With this matcher, you can check if an object “matches” a type.

* **Type:** `<T>(expected: T) => void`

This matcher checks if expect type extends provided type. It is different from `toEqual` and is more similar to [expect's](/api/expect) `toMatchObject()`. With this matcher, you can check if an object "matches" a type.

* **Type:** `() => void`

This matcher performs a strict check on object types, ensuring that the expected type matches the provided object type. It's stricter than [`toExtend`](#toextend) and is the recommended choice when working with object types as it's more likely to catch issues like readonly properties.

::: warning
This matcher only works with plain object types. It will fail for union types and other complex types. For those cases, use [`toExtend`](#toextend) instead.
:::

* **Type:** `ExpectTypeOf<ExtractedUnion>`

You can use `.extract` to narrow down types for further testing.

::: warning
If no type is found in the union, `.extract` will return `never`.
:::

* **Type:** `ExpectTypeOf<NonExcludedUnion>`

You can use `.exclude` to remove types from a union for further testing.

::: warning
If no type is found in the union, `.exclude` will return `never`.
:::

* **Type:** `ExpectTypeOf<ReturnValue>`

You can use `.returns` to extract return value of a function type.

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

* **Type:** `ExpectTypeOf<Parameters>`

You can extract function arguments with `.parameters` to perform assertions on its value. Parameters are returned as an array.

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

::: tip
You can also use [`.toBeCallableWith`](#tobecallablewith) matcher as a more expressive assertion.
:::

* **Type:** `(nth: number) => ExpectTypeOf`

You can extract a certain function argument with `.parameter(number)` call to perform other assertions on it.

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

## constructorParameters

* **Type:** `ExpectTypeOf<ConstructorParameters>`

You can extract constructor parameters as an array of values and perform assertions on them with this method.

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

::: tip
You can also use [`.toBeConstructibleWith`](#tobeconstructiblewith) matcher as a more expressive assertion.
:::

* **Type:** `ExpectTypeOf<ConstructableInstance>`

This property gives access to matchers that can be performed on an instance of the provided class.

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

* **Type:** `ExpectTypeOf<T>`

You can get array item type with `.items` to perform further assertions.

* **Type:** `ExpectTypeOf<ResolvedPromise>`

This matcher extracts resolved value of a `Promise`, so you can perform other assertions on it.

::: warning
If used on a non-promise type, it will return `never`, so you won't be able to chain it with other matchers.
:::

* **Type:** `ExpectTypeOf<Guard>`

This matcher extracts guard value (e.g., `v is number`), so you can perform assertions on it.

::: warning
Returns `never`, if the value is not a guard function, so you won't be able to chain it with other matchers.
:::

* **Type:** `ExpectTypeOf<Assert>`

This matcher extracts assert value (e.g., `assert v is number`), so you can perform assertions on it.

::: warning
Returns `never`, if the value is not an assert function, so you won't be able to chain it with other matchers.
:::

* **Type:** `() => void`

With this matcher you can check, if provided type is `any` type. If the type is too specific, the test will fail.

* **Type:** `() => void`

This matcher checks, if provided type is `unknown` type.

* **Type:** `() => void`

This matcher checks, if provided type is a `never` type.

* **Type:** `() => void`

This matcher checks, if provided type is a `function`.

* **Type:** `() => void`

This matcher checks, if provided type is an `object`.

* **Type:** `() => void`

This matcher checks, if provided type is `Array<T>`.

* **Type:** `() => void`

This matcher checks, if provided type is a `string`.

* **Type:** `() => void`

This matcher checks, if provided type is `boolean`.

* **Type:** `() => void`

This matcher checks, if provided type is `void`.

* **Type:** `() => void`

This matcher checks, if provided type is a `symbol`.

* **Type:** `() => void`

This matcher checks, if provided type is `null`.

* **Type:** `() => void`

This matcher checks, if provided type is `undefined`.

* **Type:** `() => void`

This matcher checks, if you can use `null` or `undefined` with provided type.

* **Type:** `() => void`

This matcher ensures you can call provided function with a set of parameters.

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

## toBeConstructibleWith

* **Type:** `() => void`

This matcher ensures you can create a new instance with a set of constructor parameters.

::: warning
If used on a non-function type, it will return `never`, so you won't be able to chain it with other matchers.
:::

* **Type:** `<K extends keyof T>(property: K) => ExpectTypeOf<T[K>`

This matcher checks if a property exists on the provided object. If it exists, it also returns the same set of matchers for the type of this property, so you can chain assertions one after another.

---
url: /guide/extending-matchers.md
---

**Examples:**

Example 1 (ts):
```ts
import { expectTypeOf } from 'vitest'

expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
```

Example 2 (ts):
```ts
import { expectTypeOf } from 'vitest'

expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a: 1 })
expectTypeOf<number>().toMatchTypeOf<string | number>()
expectTypeOf<string | number>().not.toMatchTypeOf<number>()
```

Example 3 (ts):
```ts
import { expectTypeOf } from 'vitest'

expectTypeOf({ a: 1, b: 1 }).toExtend({ a: 1 })
expectTypeOf<number>().toExtend<string | number>()
expectTypeOf<string | number>().not.toExtend<number>()
```

Example 4 (ts):
```ts
import { expectTypeOf } from 'vitest'

expectTypeOf({ a: 1, b: 2 }).toMatchObjectType<{ a: number }>() // preferred
expectTypeOf({ a: 1, b: 2 }).toExtend<{ a: number }>() // works but less strict

// Supports nested object checking
const user = {
  name: 'John',
  address: { city: 'New York', zip: '10001' }
}
expectTypeOf(user).toMatchObjectType<{ name: string; address: { city: string } }>()
```

---

## Profiling Test Performance

**URL:** llms-txt#profiling-test-performance

**Contents:**
- Test runner
- Main thread

When you run Vitest it reports multiple time metrics of your tests:

* Transform: How much time was spent transforming the files. See [File Transform](#file-transform).
* Setup: Time spent for running the [`setupFiles`](/config/#setupfiles) files.
* Collect: Time spent for collecting all tests in the test files. This includes the time it took to import all file dependencies.
* Tests: Time spent for actually running the test cases.
* Environment: Time spent for setting up the test [`environment`](/config/#environment), for example JSDOM.
* Prepare: Time Vitest uses to prepare the test runner. When running tests in Node, this is the time to import and execute all internal utilities inside the worker. When running tests in the browser, this also includes the time to initiate the iframe.

In cases where your test execution time is high, you can generate a profile of the test runner. See NodeJS documentation for following options:

* [`--cpu-prof`](https://nodejs.org/api/cli.html#--cpu-prof)
* [`--heap-prof`](https://nodejs.org/api/cli.html#--heap-prof)
* [`--prof`](https://nodejs.org/api/cli.html#--prof)

:::warning
The `--prof` option does not work with `pool: 'threads'` due to `node:worker_threads` limitations.
:::

To pass these options to Vitest's test runner, define `execArgv` in your Vitest configuration:

After the tests have run there should be a `test-runner-profile/*.cpuprofile` and `test-runner-profile/*.heapprofile` files generated. See [Inspecting profiling records](#inspecting-profiling-records) for instructions how to analyze these files.

See [Profiling | Examples](https://github.com/vitest-dev/vitest/tree/main/examples/profiling) for example.

Profiling main thread is useful for debugging Vitest's Vite usage and [`globalSetup`](/config/#globalsetup) files.
This is also where your Vite plugins are running.

:::tip
See [Performance | Vite](https://vitejs.dev/guide/performance.html) for more tips about Vite specific profiling.

We recommend [`vite-plugin-inspect`](https://github.com/antfu-collective/vite-plugin-inspect) for profiling your Vite plugin performance.
:::

To do this you'll need to pass arguments to the Node process that runs Vitest.

```bash
$ node --cpu-prof --cpu-prof-dir=main-profile ./node_modules/vitest/vitest.mjs --run

**Examples:**

Example 1 (bash):
```bash
> RUN  v2.1.1 /x/vitest/examples/profiling
>
> ✓ test/prime-number.test.ts (1) 4517ms
>   ✓ generate prime number 4517ms
>
> Test Files  1 passed (1)
>      Tests  1 passed (1)
>   Start at  09:32:53
>   Duration  4.80s (transform 44ms, setup 0ms, collect 35ms, tests 4.52s, environment 0ms, prepare 81ms)
>   # Time metrics ^^
>
```

Example 2 (ts):
```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    fileParallelism: false,
    execArgv: [
      '--cpu-prof',
      '--cpu-prof-dir=test-runner-profile',
      '--heap-prof',
      '--heap-prof-dir=test-runner-profile'
    ],
  },
})
```

---

## Inspired from https://playwright.dev/docs/test-sharding

**URL:** llms-txt#inspired-from-https://playwright.dev/docs/test-sharding

name: Tests
on:
  push:
    branches:
      - main
jobs:
  tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        shardIndex: [1, 2, 3, 4]
        shardTotal: [4]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20

- name: Install pnpm
        uses: pnpm/action-setup@a7487c7e89a18df4991f7f222e4898a00d66ddda # v4.1.0

- name: Install dependencies
        run: pnpm i

- name: Run tests
        run: pnpm run test --reporter=blob --shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}

- name: Upload blob report to GitHub Actions Artifacts
        if: ${{ !cancelled() }}
        uses: actions/upload-artifact@v4
        with:
          name: blob-report-${{ matrix.shardIndex }}
          path: .vitest-reports/*
          include-hidden-files: true
          retention-days: 1

merge-reports:
    if: ${{ !cancelled() }}
    needs: [tests]

runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20

- name: Install pnpm
        uses: pnpm/action-setup@a7487c7e89a18df4991f7f222e4898a00d66ddda # v4.1.0

- name: Install dependencies
        run: pnpm i

- name: Download blob reports from GitHub Actions Artifacts
        uses: actions/download-artifact@v4
        with:
          path: .vitest-reports
          pattern: blob-report-*
          merge-multiple: true

- name: Merge reports
        run: npx vitest --merge-reports
sh

**Examples:**

Example 1 (unknown):
```unknown
:::

:::tip
Test sharding can also become useful on high CPU-count machines.

Vitest will run only a single Vite server in its main thread. Rest of the threads are used to run test files.
In a high CPU-count machine the main thread can become a bottleneck as it cannot handle all the requests coming from the threads. For example in 32 CPU machine the main thread is responsible to handle load coming from 31 test threads.

To reduce the load from main thread's Vite server you can use test sharding. The load can be balanced on multiple Vite server.
```

---

## expect

**URL:** llms-txt#expect

**Contents:**
- assert
- soft
- poll
- not
- toBe
- toBeCloseTo
- toBeDefined
- toBeUndefined
- toBeTruthy
- toBeFalsy

The following types are used in the type signatures below

`expect` is used to create assertions. In this context `assertions` are functions that can be called to assert a statement. Vitest provides `chai` assertions by default and also `Jest` compatible assertions built on top of `chai`. Unlike `Jest`, Vitest supports a message as the second argument - if the assertion fails, the error message will be equal to it.

For example, this code asserts that an `input` value is equal to `2`. If it's not, the assertion will throw an error, and the test will fail.

Technically this example doesn't use [`test`](/api/#test) function, so in the console you will see Node.js error instead of Vitest output. To learn more about `test`, please read [Test API Reference](/api/).

Also, `expect` can be used statically to access matcher functions, described later, and more.

::: warning
`expect` has no effect on testing types, if the expression doesn't have a type error. If you want to use Vitest as [type checker](/guide/testing-types), use [`expectTypeOf`](/api/expect-typeof) or [`assertType`](/api/assert-type).
:::

* **Type:** `Chai.AssertStatic`

Vitest reexports chai's [`assert` API](https://www.chaijs.com/api/assert/) as `expect.assert` for convenience. You can see the supported methods on the [Assert API page](/api/assert).

This is especially useful if you need to narrow down the type, since `expect.to*` methods do not support that:

::: tip
Note that `expect.assert` also supports other type-narrowing methods (like `assert.isDefined`, `assert.exists` and so on).
:::

* **Type:** `ExpectStatic & (actual: any) => Assertions`

`expect.soft` functions similarly to `expect`, but instead of terminating the test execution upon a failed assertion, it continues running and marks the failure as a test failure. All errors encountered during the test will be displayed until the test is completed.

It can also be used with `expect`. if `expect` assertion fails, the test will be terminated and all errors will be displayed.

::: warning
`expect.soft` can only be used inside the [`test`](/api/#test) function.
:::

`expect.poll` reruns the *assertion* until it is succeeded. You can configure how many times Vitest should rerun the `expect.poll` callback by setting `interval` and `timeout` options.

If an error is thrown inside the `expect.poll` callback, Vitest will retry again until the timeout runs out.

::: warning
`expect.poll` makes every assertion asynchronous, so you need to await it. Since Vitest 3, if you forget to await it, the test will fail with a warning to do so.

`expect.poll` doesn't work with several matchers:

* Snapshot matchers are not supported because they will always succeed. If your condition is flaky, consider using [`vi.waitFor`](/api/vi#vi-waitfor) instead to resolve it first:

* `.resolves` and `.rejects` are not supported. `expect.poll` already awaits the condition if it's asynchronous.
* `toThrow` and its aliases are not supported because the `expect.poll` condition is always resolved before the matcher gets the value
  :::

Using `not` will negate the assertion. For example, this code asserts that an `input` value is not equal to `2`. If it's equal, the assertion will throw an error, and the test will fail.

* **Type:** `(value: any) => Awaitable<void>`

`toBe` can be used to assert if primitives are equal or that objects share the same reference. It is equivalent of calling `expect(Object.is(3, 3)).toBe(true)`. If the objects are not the same, but you want to check if their structures are identical, you can use [`toEqual`](#toequal).

For example, the code below checks if the trader has 13 apples.

Try not to use `toBe` with floating-point numbers. Since JavaScript rounds them, `0.1 + 0.2` is not strictly `0.3`. To reliably assert floating-point numbers, use [`toBeCloseTo`](#tobecloseto) assertion.

* **Type:** `(value: number, numDigits?: number) => Awaitable<void>`

Use `toBeCloseTo` to compare floating-point numbers. The optional `numDigits` argument limits the number of digits to check *after* the decimal point. For example:

* **Type:** `() => Awaitable<void>`

`toBeDefined` asserts that the value is not equal to `undefined`. Useful use case would be to check if function *returned* anything.

* **Type:** `() => Awaitable<void>`

Opposite of `toBeDefined`, `toBeUndefined` asserts that the value *is* equal to `undefined`. Useful use case would be to check if function hasn't *returned* anything.

* **Type:** `() => Awaitable<void>`

`toBeTruthy` asserts that the value is true when converted to boolean. Useful if you don't care for the value, but just want to know it can be converted to `true`.

For example, having this code you don't care for the return value of `stocks.getInfo` - it maybe a complex object, a string, or anything else. The code will still work.

So if you want to test that `stocks.getInfo` will be truthy, you could write:

Everything in JavaScript is truthy, except `false`, `null`, `undefined`, `NaN`, `0`, `-0`, `0n`, `""` and `document.all`.

* **Type:** `() => Awaitable<void>`

`toBeFalsy` asserts that the value is false when converted to boolean. Useful if you don't care for the value, but just want to know if it can be converted to `false`.

For example, having this code you don't care for the return value of `stocks.stockFailed` - it may return any falsy value, but the code will still work.

So if you want to test that `stocks.stockFailed` will be falsy, you could write:

Everything in JavaScript is truthy, except `false`, `null`, `undefined`, `NaN`, `0`, `-0`, `0n`, `""` and `document.all`.

* **Type:** `() => Awaitable<void>`

`toBeNull` simply asserts if something is `null`. Alias for `.toBe(null)`.

* **Type:** `() => Awaitable<void>`

`toBeNullable` simply asserts if something is nullable (`null` or `undefined`).

* **Type:** `() => Awaitable<void>`

`toBeNaN` simply asserts if something is `NaN`. Alias for `.toBe(NaN)`.

* **Type:** `(sample: Array<any>) => any`

`toBeOneOf` asserts if a value matches any of the values in the provided array.

The asymmetric matcher is particularly useful when testing optional properties that could be either `null` or `undefined`:

:::tip
You can use `expect.not` with this matcher to ensure a value does NOT match any of the provided options.
:::

* **Type:** `(c: 'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined') => Awaitable<void>`

`toBeTypeOf` asserts if an actual value is of type of received type.

* **Type:** `(c: any) => Awaitable<void>`

`toBeInstanceOf` asserts if an actual value is instance of received class.

* **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeGreaterThan` asserts if actual value is greater than received one. Equal values will fail the test.

## toBeGreaterThanOrEqual

* **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeGreaterThanOrEqual` asserts if actual value is greater than received one or equal to it.

* **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeLessThan` asserts if actual value is less than received one. Equal values will fail the test.

## toBeLessThanOrEqual

* **Type:** `(n: number | bigint) => Awaitable<void>`

`toBeLessThanOrEqual` asserts if actual value is less than received one or equal to it.

* **Type:** `(received: any) => Awaitable<void>`

`toEqual` asserts if actual value is equal to received one or has the same structure, if it is an object (compares them recursively). You can see the difference between `toEqual` and [`toBe`](#tobe) in this example:

:::warning
For `Error` objects, non-enumerable properties such as `name`, `message`, `cause` and `AggregateError.errors` are also compared. For `Error.cause`, the comparison is done asymmetrically:

To test if something was thrown, use [`toThrowError`](#tothrowerror) assertion.
:::

* **Type:** `(received: any) => Awaitable<void>`

`toStrictEqual` asserts if the actual value is equal to the received one or has the same structure if it is an object (compares them recursively), and of the same type.

Differences from [`.toEqual`](#toequal):

* Keys with `undefined` properties are checked. e.g. `{a: undefined, b: 2}` does not match `{b: 2}` when using `.toStrictEqual`.
* Array sparseness is checked. e.g. `[, 1]` does not match `[undefined, 1]` when using `.toStrictEqual`.
* Object types are checked to be equal. e.g. A class instance with fields `a` and `b` will not equal a literal object with fields `a` and `b`.

* **Type:** `(received: string) => Awaitable<void>`

`toContain` asserts if the actual value is in an array. `toContain` can also check whether a string is a substring of another string. If you are running tests in a browser-like environment, this assertion can also check if class is contained in a `classList`, or an element is inside another one.

* **Type:** `(received: any) => Awaitable<void>`

`toContainEqual` asserts if an item with a specific structure and values is contained in an array.
It works like [`toEqual`](#toequal) inside for each element.

* **Type:** `(received: number) => Awaitable<void>`

`toHaveLength` asserts if an object has a `.length` property and it is set to a certain numeric value.

* **Type:** `(key: any, received?: any) => Awaitable<void>`

`toHaveProperty` asserts if a property at provided reference `key` exists for an object.

You can provide an optional value argument also known as deep equality, like the `toEqual` matcher to compare the received property value.

* **Type:** `(received: string | regexp) => Awaitable<void>`

`toMatch` asserts if a string matches a regular expression or a string.

* **Type:** `(received: object | array) => Awaitable<void>`

`toMatchObject` asserts if an object matches a subset of the properties of an object.

You can also pass an array of objects. This is useful if you want to check that two arrays match in their number and order of elements, as opposed to `arrayContaining`, which allows for extra elements in the received array.

* **Type:** `(received: any) => Awaitable<void>`

* **Alias:** `toThrow`

`toThrowError` asserts if a function throws an error when it is called.

You can provide an optional argument to test that a specific error is thrown:

* `RegExp`: error message matches the pattern
* `string`: error message includes the substring
* `Error`, `AsymmetricMatcher`: compare with a received object similar to `toEqual(received)`

:::tip
You must wrap the code in a function, otherwise the error will not be caught, and test will fail.

This does not apply for async calls as [rejects](#rejects) correctly unwraps the promise:

For example, if we want to test that `getFruitStock('pineapples')` throws, we could write:

:::tip
To test async functions, use in combination with [rejects](#rejects).

* **Type:** `<T>(shape?: Partial<T> | string, hint?: string) => void`

This ensures that a value matches the most recent snapshot.

You can provide an optional `hint` string argument that is appended to the test name. Although Vitest always appends a number at the end of a snapshot name, short descriptive hints might be more useful than numbers to differentiate multiple snapshots in a single it or test block. Vitest sorts snapshots by name in the corresponding `.snap` file.

:::tip
When a snapshot mismatches and causes the test to fail, if the mismatch is expected, you can press `u` key to update the snapshot once. Or you can pass `-u` or `--update` CLI options to make Vitest always update the tests.
:::

You can also provide a shape of an object, if you are testing just a shape of an object, and don't need it to be 100% compatible:

## toMatchInlineSnapshot

* **Type:** `<T>(shape?: Partial<T> | string, snapshot?: string, hint?: string) => void`

This ensures that a value matches the most recent snapshot.

Vitest adds and updates the inlineSnapshot string argument to the matcher in the test file (instead of an external `.snap` file).

You can also provide a shape of an object, if you are testing just a shape of an object, and don't need it to be 100% compatible:

## toMatchFileSnapshot {#tomatchfilesnapshot}

* **Type:** `<T>(filepath: string, hint?: string) => Promise<void>`

Compare or update the snapshot with the content of a file explicitly specified (instead of the `.snap` file).

Note that since file system operation is async, you need to use `await` with `toMatchFileSnapshot()`. If `await` is not used, Vitest treats it like `expect.soft`, meaning the code after the statement will continue to run even if the snapshot mismatches. After the test finishes, Vitest will check the snapshot and fail if there is a mismatch.

## toThrowErrorMatchingSnapshot

* **Type:** `(hint?: string) => void`

The same as [`toMatchSnapshot`](#tomatchsnapshot), but expects the same value as [`toThrowError`](#tothrowerror).

## toThrowErrorMatchingInlineSnapshot

* **Type:** `(snapshot?: string, hint?: string) => void`

The same as [`toMatchInlineSnapshot`](#tomatchinlinesnapshot), but expects the same value as [`toThrowError`](#tothrowerror).

* **Type:** `() => Awaitable<void>`

This assertion is useful for testing that a function has been called. Requires a spy function to be passed to `expect`.

## toHaveBeenCalledTimes

* **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function was called a certain amount of times. Requires a spy function to be passed to `expect`.

## toHaveBeenCalledWith

* **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called at least once with certain parameters. Requires a spy function to be passed to `expect`.

## toHaveBeenCalledBefore 3.0.0 {#tohavebeencalledbefore}

* **Type**: `(mock: MockInstance, failIfNoFirstInvocation?: boolean) => Awaitable<void>`

This assertion checks if a `Mock` was called before another `Mock`.

## toHaveBeenCalledAfter 3.0.0 {#tohavebeencalledafter}

* **Type**: `(mock: MockInstance, failIfNoFirstInvocation?: boolean) => Awaitable<void>`

This assertion checks if a `Mock` was called after another `Mock`.

## toHaveBeenCalledExactlyOnceWith 3.0.0 {#tohavebeencalledexactlyoncewith}

* **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called exactly once and with certain parameters. Requires a spy function to be passed to `expect`.

## toHaveBeenLastCalledWith

* **Type**: `(...args: any[]) => Awaitable<void>`

This assertion checks if a function was called with certain parameters at its last invocation. Requires a spy function to be passed to `expect`.

## toHaveBeenNthCalledWith

* **Type**: `(time: number, ...args: any[]) => Awaitable<void>`

This assertion checks if a function was called with certain parameters at the certain time. The count starts at 1. So, to check the second entry, you would write `.toHaveBeenNthCalledWith(2, ...)`.

Requires a spy function to be passed to `expect`.

* **Type**: `() => Awaitable<void>`

This assertion checks if a function has successfully returned a value at least once (i.e., did not throw an error). Requires a spy function to be passed to `expect`.

## toHaveReturnedTimes

* **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function has successfully returned a value an exact amount of times (i.e., did not throw an error). Requires a spy function to be passed to `expect`.

## toHaveReturnedWith

* **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a value with certain parameters at least once. Requires a spy function to be passed to `expect`.

## toHaveLastReturnedWith

* **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a certain value when it was last invoked. Requires a spy function to be passed to `expect`.

## toHaveNthReturnedWith

* **Type**: `(time: number, returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully returned a value with certain parameters on a certain call. Requires a spy function to be passed to `expect`.

* **Type**: `() => Awaitable<void>`

This assertion checks if a function has successfully resolved a value at least once (i.e., did not reject). Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

## toHaveResolvedTimes

* **Type**: `(amount: number) => Awaitable<void>`

This assertion checks if a function has successfully resolved a value an exact amount of times (i.e., did not reject). Requires a spy function to be passed to `expect`.

This will only count resolved promises. If the function returned a promise, but it was not resolved yet, it will not be counted.

## toHaveResolvedWith

* **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value at least once. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

## toHaveLastResolvedWith

* **Type**: `(returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value when it was last invoked. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

## toHaveNthResolvedWith

* **Type**: `(time: number, returnValue: any) => Awaitable<void>`

You can call this assertion to check if a function has successfully resolved a certain value on a specific invocation. Requires a spy function to be passed to `expect`.

If the function returned a promise, but it was not resolved yet, this will fail.

* **Type:** `(predicate: (value: any) => boolean) => Awaitable<void>`

This assertion checks if a value satisfies a certain predicate.

* **Type:** `Promisify<Assertions>`

`resolves` is intended to remove boilerplate when asserting asynchronous code. Use it to unwrap value from the pending promise and assert its value with usual assertions. If the promise rejects, the assertion will fail.

It returns the same `Assertions` object, but all matchers now return `Promise`, so you would need to `await` it. Also works with `chai` assertions.

For example, if you have a function, that makes an API call and returns some data, you may use this code to assert its return value:

:::warning
If the assertion is not awaited, then you will have a false-positive test that will pass every time. To make sure that assertions are actually called, you may use [`expect.assertions(number)`](#expect-assertions).

Since Vitest 3, if a method is not awaited, Vitest will show a warning at the end of the test. In Vitest 4, the test will be marked as "failed" if the assertion is not awaited.
:::

* **Type:** `Promisify<Assertions>`

`rejects` is intended to remove boilerplate when asserting asynchronous code. Use it to unwrap reason why the promise was rejected, and assert its value with usual assertions. If the promise successfully resolves, the assertion will fail.

It returns the same `Assertions` object, but all matchers now return `Promise`, so you would need to `await` it. Also works with `chai` assertions.

For example, if you have a function that fails when you call it, you may use this code to assert the reason:

:::warning
If the assertion is not awaited, then you will have a false-positive test that will pass every time. To make sure that assertions were actually called, you can use [`expect.assertions(number)`](#expect-assertions).

Since Vitest 3, if a method is not awaited, Vitest will show a warning at the end of the test. In Vitest 4, the test will be marked as "failed" if the assertion is not awaited.
:::

* **Type:** `(count: number) => void`

After the test has passed or failed verify that a certain number of assertions was called during a test. A useful case would be to check if an asynchronous code was called.

For example, if we have a function that asynchronously calls two matchers, we can assert that they were actually called.

::: warning
When using `assertions` with async concurrent tests, `expect` from the local [Test Context](/guide/test-context) must be used to ensure the right test is detected.
:::

## expect.hasAssertions

* **Type:** `() => void`

After the test has passed or failed verify that at least one assertion was called during a test. A useful case would be to check if an asynchronous code was called.

For example, if you have a code that calls a callback, we can make an assertion inside a callback, but the test will always pass if we don't check if an assertion was called.

## expect.unreachable

* **Type:** `(message?: string) => never`

This method is used to assert that a line should never be reached.

For example, if we want to test that `build()` throws due to receiving directories having no `src` folder, and also handle each error separately, we could do this:

* **Type:** `() => any`

This asymmetric matcher matches anything except `null` or `undefined`. Useful if you just want to be sure that a property exists with any value that's not either `null` or `undefined`.

* **Type:** `(constructor: unknown) => any`

This asymmetric matcher, when used with an equality check, will return `true` only if the value is an instance of a specified constructor. Useful, if you have a value that is generated each time, and you only want to know that it exists with a proper type.

## expect.closeTo {#expect-closeto}

* **Type:** `(expected: any, precision?: number) => any`

`expect.closeTo` is useful when comparing floating point numbers in object properties or array item. If you need to compare a number, please use `.toBeCloseTo` instead.

The optional `precision` argument limits the number of digits to check **after** the decimal point. For the default value `2`, the test criterion is `Math.abs(expected - received) < 0.005 (that is, 10 ** -2 / 2)`.

For example, this test passes with a precision of 5 digits:

## expect.arrayContaining

* **Type:** `<T>(expected: T[]) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is an array and contains specified items.

:::tip
You can use `expect.not` with this matcher to negate the expected value.
:::

## expect.objectContaining

* **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value has a similar shape.

:::tip
You can use `expect.not` with this matcher to negate the expected value.
:::

## expect.stringContaining

* **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is a string and contains a specified substring.

:::tip
You can use `expect.not` with this matcher to negate the expected value.
:::

## expect.stringMatching

* **Type:** `(expected: any) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value is a string and contains a specified substring or if the string matches a regular expression.

:::tip
You can use `expect.not` with this matcher to negate the expected value.
:::

## expect.schemaMatching

* **Type:** `(expected: StandardSchemaV1) => any`

When used with an equality check, this asymmetric matcher will return `true` if the value matches the provided schema. The schema must implement the [Standard Schema v1](https://standardschema.dev/) specification.

:::tip
You can use `expect.not` with this matcher to negate the expected value.
:::

## expect.addSnapshotSerializer

* **Type:** `(plugin: PrettyFormatPlugin) => void`

This method adds custom serializers that are called when creating a snapshot. This is an advanced feature - if you want to know more, please read a [guide on custom serializers](/guide/snapshot#custom-serializer).

If you are adding custom serializers, you should call this method inside [`setupFiles`](/config/#setupfiles). This will affect every snapshot.

:::tip
If you previously used Vue CLI with Jest, you might want to install [jest-serializer-vue](https://www.npmjs.com/package/jest-serializer-vue). Otherwise, your snapshots will be wrapped in a string, which cases `"` to be escaped.
:::

* **Type:** `(matchers: MatchersObject) => void`

You can extend default matchers with your own. This function is used to extend the matchers object with custom matchers.

When you define matchers that way, you also create asymmetric matchers that can be used like `expect.stringContaining`.

::: tip
If you want your matchers to appear in every test, you should call this method inside [`setupFiles`](/config/#setupfiles).
:::

This function is compatible with Jest's `expect.extend`, so any library that uses it to create custom matchers will work with Vitest.

If you are using TypeScript, since Vitest 0.31.0 you can extend default `Assertion` interface in an ambient declaration file (e.g: `vitest.d.ts`) with the code below:

::: warning
Don't forget to include the ambient declaration file in your `tsconfig.json`.
:::

:::tip
If you want to know more, checkout [guide on extending matchers](/guide/extending-matchers).
:::

## expect.addEqualityTesters {#expect-addequalitytesters}

* **Type:** `(tester: Array<Tester>) => void`

You can use this method to define custom testers, which are methods used by matchers, to test if two objects are equal. It is compatible with Jest's `expect.addEqualityTesters`.

---
url: /api/expect-typeof.md
---

**Examples:**

Example 1 (ts):
```ts
type Awaitable<T> = T | PromiseLike<T>
```

Example 2 (ts):
```ts
export interface ExpectStatic extends Chai.ExpectStatic, AsymmetricMatchersContaining {
  <T>(actual: T, message?: string): Assertion<T>
  extend: (expects: MatchersObject) => void
  anything: () => any
  any: (constructor: unknown) => any
  getState: () => MatcherState
  setState: (state: Partial<MatcherState>) => void
  not: AsymmetricMatchersContaining
}
```

Example 3 (unknown):
```unknown
Technically this example doesn't use [`test`](/api/#test) function, so in the console you will see Node.js error instead of Vitest output. To learn more about `test`, please read [Test API Reference](/api/).

Also, `expect` can be used statically to access matcher functions, described later, and more.

::: warning
`expect` has no effect on testing types, if the expression doesn't have a type error. If you want to use Vitest as [type checker](/guide/testing-types), use [`expectTypeOf`](/api/expect-typeof) or [`assertType`](/api/assert-type).
:::

## assert

* **Type:** `Chai.AssertStatic`

Vitest reexports chai's [`assert` API](https://www.chaijs.com/api/assert/) as `expect.assert` for convenience. You can see the supported methods on the [Assert API page](/api/assert).

This is especially useful if you need to narrow down the type, since `expect.to*` methods do not support that:
```

Example 4 (unknown):
```unknown
::: tip
Note that `expect.assert` also supports other type-narrowing methods (like `assert.isDefined`, `assert.exists` and so on).
:::

## soft

* **Type:** `ExpectStatic & (actual: any) => Assertions`

`expect.soft` functions similarly to `expect`, but instead of terminating the test execution upon a failed assertion, it continues running and marks the failure as a test failure. All errors encountered during the test will be displayed until the test is completed.
```

---

## Vitest UI

**URL:** llms-txt#vitest-ui

Powered by Vite, Vitest also has a dev server under the hood when running the tests. This allows Vitest to provide a beautiful UI to view and interact with your tests. The Vitest UI is optional, so you'll need to install it with:

Then you can start the tests with UI by passing the `--ui` flag:

Then you can visit the Vitest UI at `http://localhost:51204/__vitest__/`

::: warning
The UI is interactive and requires a running Vite server, so make sure to run Vitest in `watch` mode (the default). Alternatively, you can generate a static HTML report that looks identical to the Vitest UI by specifying `html` in config's `reporters` option.
:::

UI can also be used as a reporter. Use `'html'` reporter in your Vitest configuration to generate HTML output and preview the results of your tests:

You can check your coverage report in Vitest UI: see [Vitest UI Coverage](/guide/coverage#vitest-ui) for more details.

::: warning
If you still want to see how your tests are running in real time in the terminal, don't forget to add `default` reporter to `reporters` option: `['default', 'html']`.
:::

::: tip
To preview your HTML report, you can use the [vite preview](https://vitejs.dev/guide/cli.html#vite-preview) command:

You can configure output with [`outputFile`](/config/#outputfile) config option. You need to specify `.html` path there. For example, `./html/index.html` is the default value.
:::

---
url: /guide/browser/why.md
---

**Examples:**

Example 1 (bash):
```bash
npm i -D @vitest/ui
```

Example 2 (bash):
```bash
vitest --ui
```

Example 3 (unknown):
```unknown
You can check your coverage report in Vitest UI: see [Vitest UI Coverage](/guide/coverage#vitest-ui) for more details.

::: warning
If you still want to see how your tests are running in real time in the terminal, don't forget to add `default` reporter to `reporters` option: `['default', 'html']`.
:::

::: tip
To preview your HTML report, you can use the [vite preview](https://vitejs.dev/guide/cli.html#vite-preview) command:
```

---

## Configuring Vitest

**URL:** llms-txt#configuring-vitest

**Contents:**
  - include
  - exclude
  - includeSource
  - name
  - server {#server}
  - deps
  - runner
  - benchmark

If you are using Vite and have a `vite.config` file, Vitest will read it to match with the plugins and setup as your Vite app. If you want to have a different configuration for testing or your main app doesn't rely on Vite specifically, you could either:

* Create `vitest.config.ts`, which will have the higher priority and will **override** the configuration from `vite.config.ts` (Vitest supports all conventional JS and TS extensions, but doesn't support `json`) - it means all options in your `vite.config` will be **ignored**
* Pass `--config` option to CLI, e.g. `vitest --config ./path/to/vitest.config.ts`
* Use `process.env.VITEST` or `mode` property on `defineConfig` (will be set to `test`/`benchmark` if not overridden with `--mode`) to conditionally apply different configuration in `vite.config.ts`. Note that like any other environment variable, `VITEST` is also exposed on `import.meta.env` in your tests

To configure `vitest` itself, add `test` property in your Vite config. You'll also need to add a reference to Vitest types using a [triple slash command](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) at the top of your config file, if you are importing `defineConfig` from `vite` itself.

::: details Open Config Examples
Using `defineConfig` from `vite` you should follow this:

The `<reference types="vitest" />` will stop working in Vitest 4, but you can already start migrating to `vitest/config`:

Using `defineConfig` from `vitest/config` you should follow this:

You can retrieve Vitest's default options to expand them if needed:

When using a separate `vitest.config.js`, you can also extend Vite's options from another config file if needed:

If your Vite config is defined as a function, you can define the config like this:

::: warning
*All listed options* on this page are located within a `test` property inside the configuration:

Since Vitest uses Vite config, you can also use any configuration option from [Vite](https://vitejs.dev/config/). For example, `define` to define global variables, or `resolve.alias` to define aliases - these options should be defined on the top level, *not* within a `test` property.

Configuration options that are not supported inside a [project](/guide/projects) config have  sign next to them. This means they can only be set in the root Vitest config.
:::

* **Type:** `string[]`
* **Default:** `['**/*.{test,spec}.?(c|m)[jt]s?(x)']`
* **CLI:** `vitest [...include]`, `vitest **/*.test.js`

A list of glob patterns that match your test files.

::: tip NOTE
When using coverage, Vitest automatically adds test files `include` patterns to coverage's default `exclude` patterns. See [`coverage.exclude`](#coverage-exclude).
:::

* **Type:** `string[]`
* **Default:** `['**/node_modules/**', '**/.git/**']`
* **CLI:** `vitest --exclude "**/excluded-file" --exclude "*/other-files/*.js"`

A list of glob patterns that should be excluded from your test files.

::: warning
This option does not affect coverage. If you need to remove certain files from the coverage report, use [`coverage.exclude`](#coverage-exclude).

This is the only option that doesn't override your configuration if you provide it with a CLI flag. All glob patterns added via `--exclude` flag will be added to the config's `exclude`.
:::

* **Type:** `string[]`
* **Default:** `[]`

Include globs for in-source test files.

When defined, Vitest will run all matched files with `import.meta.vitest` inside.

* **Type:** `string | { label: string, color?: LabelColor }`

Assign a custom name to the test project or Vitest process. The name will be visible in the CLI and UI, and available in the Node.js API via [`project.name`](/advanced/api/test-project#name).

Color used by CLI and UI can be changed by providing an object with `color` property.

* **Type:** `{ sourcemap?, deps?, ... }`

Moudle runner options.

#### server.sourcemap

* **Type:** `'inline' | boolean`
* **Default:** `'inline'`

Inject inline source map to modules.

* **Type:** `{ dumpModules?, loadDumppedModules? }`

Module runner debugger options.

#### server.debug.dumpModules

* **Type:** `boolean | string`

Dump the transformed module to filesystem. Passing a string will dump to the specified path.

#### server.debug.loadDumppedModules

* **Type:** `boolean`

Read dumped module from filesystem whenever exists. Useful for debugging by modifying the dump result from the filesystem.

* **Type:** `{ external?, inline?, ... }`

Handling for dependencies resolution.

#### server.deps.external

* **Type:** `(string | RegExp)[]`
* **Default:** `[/\/node_modules\//]`

Externalize means that Vite will bypass the package to the native Node. Externalized dependencies will not be applied to Vite's transformers and resolvers, so they do not support HMR on reload. By default, all packages inside `node_modules` are externalized.

These options support package names as they are written in `node_modules` or specified inside [`deps.moduleDirectories`](#deps-moduledirectories). For example, package `@company/some-name` located inside `packages/some-name` should be specified as `some-name`, and `packages` should be included in `deps.moduleDirectories`. Basically, Vitest always checks the file path, not the actual package name.

If regexp is used, Vitest calls it on the *file path*, not the package name.

#### server.deps.inline

* **Type:** `(string | RegExp)[] | true`
* **Default:** `[]`

Vite will process inlined modules. This could be helpful to handle packages that ship `.js` in ESM format (that Node can't handle).

If `true`, every dependency will be inlined. All dependencies, specified in [`ssr.noExternal`](https://vitejs.dev/guide/ssr.html#ssr-externals) will be inlined by default.

#### server.deps.fallbackCJS

* **Type** `boolean`
* **Default:** `false`

When a dependency is a valid ESM package, try to guess the cjs version based on the path. This might be helpful, if a dependency has the wrong ESM file.

This might potentially cause some misalignment if a package has different logic in ESM and CJS mode.

#### server.deps.cacheDir

* **Type** `string`
* **Default**: `'node_modules/.vite'`

Directory to save cache files.

* **Type:** `{ optimizer?, ... }`

Handling for dependencies resolution.

#### deps.optimizer {#deps-optimizer}

* **Type:** `{ ssr?, client? }`
* **See also:** [Dep Optimization Options](https://vitejs.dev/config/dep-optimization-options.html)

Enable dependency optimization. If you have a lot of tests, this might improve their performance.

When Vitest encounters the external library listed in `include`, it will be bundled into a single file using esbuild and imported as a whole module. This is good for several reasons:

* Importing packages with a lot of imports is expensive. By bundling them into one file we can save a lot of time
* Importing UI libraries is expensive because they are not meant to run inside Node.js
* Your `alias` configuration is now respected inside bundled packages
* Code in your tests is running closer to how it's running in the browser

Be aware that only packages in `deps.optimizer?.[mode].include` option are bundled (some plugins populate this automatically, like Svelte). You can read more about available options in [Vite](https://vitejs.dev/config/dep-optimization-options.html) docs (Vitest doesn't support `disable` and `noDiscovery` options). By default, Vitest uses `optimizer.client` for `jsdom` and `happy-dom` environments, and `optimizer.ssr` for `node` and `edge` environments.

This options also inherits your `optimizeDeps` configuration (for web Vitest will extend `optimizeDeps`, for ssr - `ssr.optimizeDeps`). If you redefine `include`/`exclude` option in `deps.optimizer` it will extend your `optimizeDeps` when running tests. Vitest automatically removes the same options from `include`, if they are listed in `exclude`.

::: tip
You will not be able to edit your `node_modules` code for debugging, since the code is actually located in your `cacheDir` or `test.cache.dir` directory. If you want to debug with `console.log` statements, edit it directly or force rebundling with `deps.optimizer?.[mode].force` option.
:::

#### deps.optimizer.{mode}.enabled

* **Type:** `boolean`
* **Default:** `false`

Enable dependency optimization.

#### deps.client  {#deps-client}

* **Type:** `{ transformAssets?, ... }`

Options that are applied to external files when the environment is set to `client`. By default, `jsdom` and `happy-dom` use `client` environment, while `node` and `edge` environments use `ssr`, so these options will have no affect on files inside those environments.

Usually, files inside `node_modules` are externalized, but these options also affect files in [`server.deps.external`](#server-deps-external).

#### deps.client.transformAssets

* **Type:** `boolean`
* **Default:** `true`

Should Vitest process assets (.png, .svg, .jpg, etc) files and resolve them like Vite does in the browser.

This module will have a default export equal to the path to the asset, if no query is specified.

::: warning
At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.
:::

#### deps.client.transformCss

* **Type:** `boolean`
* **Default:** `true`

Should Vitest process CSS (.css, .scss, .sass, etc) files and resolve them like Vite does in the browser.

If CSS files are disabled with [`css`](#css) options, this option will just silence `ERR_UNKNOWN_FILE_EXTENSION` errors.

::: warning
At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.
:::

#### deps.client.transformGlobPattern

* **Type:** `RegExp | RegExp[]`
* **Default:** `[]`

Regexp pattern to match external files that should be transformed.

By default, files inside `node_modules` are externalized and not transformed, unless it's CSS or an asset, and corresponding option is not disabled.

::: warning
At the moment, this option only works with [`vmThreads`](#vmthreads) and [`vmForks`](#vmforks) pools.
:::

#### deps.interopDefault

* **Type:** `boolean`
* **Default:** `true`

Interpret CJS module's default as named exports. Some dependencies only bundle CJS modules and don't use named exports that Node.js can statically analyze when a package is imported using `import` syntax instead of `require`. When importing such dependencies in Node environment using named exports, you will see this error:

Vitest doesn't do static analysis, and cannot fail before your running code, so you will most likely see this error when running tests, if this feature is disabled:

By default, Vitest assumes you are using a bundler to bypass this and will not fail, but you can disable this behaviour manually, if your code is not processed.

#### deps.moduleDirectories

* **Type:** `string[]`
* **Default**: `['node_modules']`

A list of directories that should be treated as module directories. This config option affects the behavior of [`vi.mock`](/api/vi#vi-mock): when no factory is provided and the path of what you are mocking matches one of the `moduleDirectories` values, Vitest will try to resolve the mock by looking for a `__mocks__` folder in the [root](#root) of the project.

This option will also affect if a file should be treated as a module when externalizing dependencies. By default, Vitest imports external modules with native Node.js bypassing Vite transformation step.

Setting this option will *override* the default, if you wish to still search `node_modules` for packages include it along with any other options:

* **Type**: `VitestRunnerConstructor`
* **Default**: `node`, when running tests, or `benchmark`, when running benchmarks

Path to a custom test runner. This is an advanced feature and should be used with custom library runners. You can read more about it in [the documentation](/advanced/runner).

* **Type:** `{ include?, exclude?, ... }`

Options used when running `vitest bench`.

#### benchmark.include

* **Type:** `string[]`
* **Default:** `['**/*.{bench,benchmark}.?(c|m)[jt]s?(x)']`

Include globs for benchmark test files

#### benchmark.exclude

* **Type:** `string[]`
* **Default:** `['node_modules', 'dist', '.idea', '.git', '.cache']`

Exclude globs for benchmark test files

#### benchmark.includeSource

* **Type:** `string[]`
* **Default:** `[]`

Include globs for in-source benchmark test files. This option is similar to [`includeSource`](#includesource).

When defined, Vitest will run all matched files with `import.meta.vitest` inside.

#### benchmark.reporters

* **Type:** `Arrayable<BenchmarkBuiltinReporters | Reporter>`
* **Default:** `'default'`

Custom reporter for output. Can contain one or more built-in report names, reporter instances, and/or paths to custom reporters.

#### benchmark.outputFile

Deprecated in favor of `benchmark.outputJson`.

#### benchmark.outputJson {#benchmark-outputJson}

* **Type:** `string | undefined`
* **Default:** `undefined`

A file path to store the benchmark result, which can be used for `--compare` option later.

**Examples:**

Example 1 (unknown):
```unknown
The `<reference types="vitest" />` will stop working in Vitest 4, but you can already start migrating to `vitest/config`:
```

Example 2 (unknown):
```unknown
Using `defineConfig` from `vitest/config` you should follow this:
```

Example 3 (unknown):
```unknown
You can retrieve Vitest's default options to expand them if needed:
```

Example 4 (unknown):
```unknown
When using a separate `vitest.config.js`, you can also extend Vite's options from another config file if needed:
```

---

## Run math.test.ts immediately

**URL:** llms-txt#run-math.test.ts-immediately

**Contents:**
  - Replacing `vite-node` with [Module Runner](https://vite.dev/guide/api-environment-runtimes.html#modulerunner)
  - `workspace` is Replaced with `projects`
  - Browser Provider Rework
  - Pool Rework
  - Reporter Updates
  - Snapshots using custom elements print the shadow root
  - Deprecated APIs are Removed
- Migrating from Jest {#jest}
  - Globals as a Default
  - `mock.mockReset`

$ pnpm run test:dev math.test.ts
ts [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    workspace: './vitest.workspace.js', // [!code --]
    projects: [ // [!code ++]
      './packages/*', // [!code ++]
      { // [!code ++]
        test: { // [!code ++]
          name: 'unit', // [!code ++]
        }, // [!code ++]
      }, // [!code ++]
    ] // [!code ++]
  }
})
ts [vitest.workspace.js]
import { defineWorkspace } from 'vitest/config' // [!code --]

export default defineWorkspace([ // [!code --]
  './packages/*', // [!code --]
  { // [!code --]
    test: { // [!code --]
      name: 'unit', // [!code --]
    }, // [!code --]
  } // [!code --]
]) // [!code --]
ts
import { playwright } from '@vitest/browser-playwright' // [!code ++]

export default defineConfig({
  test: {
    browser: {
      provider: 'playwright', // [!code --]
      provider: playwright({ // [!code ++]
        launchOptions: { // [!code ++]
          slowMo: 100, // [!code ++]
        }, // [!code ++]
      }), // [!code ++]
      instances: [
        {
          browser: 'chromium',
          launch: { // [!code --]
            slowMo: 100, // [!code --]
          }, // [!code --]
        },
      ],
    },
  },
})
ts
import { page } from '@vitest/browser/context' // [!code --]
import { page } from 'vitest/browser' // [!code ++]

test('example', async () => {
  await page.getByRole('button').click()
})
ts
import { getElementError } from '@vitest/browser/utils' // [!code --]
import { utils } from 'vitest/browser' // [!code ++]
const { getElementError } = utils // [!code ++]
ts
export default defineConfig({
  test: {
    poolOptions: { // [!code --]
      forks: { // [!code --]
        execArgv: ['--expose-gc'], // [!code --]
        isolate: false, // [!code --]
        singleFork: true, // [!code --]
      }, // [!code --]
      vmThreads: { // [!code --]
        memoryLimit: '300Mb' // [!code --]
      }, // [!code --]
    }, // [!code --]
    execArgv: ['--expose-gc'], // [!code ++]
    isolate: false, // [!code ++]
    maxWorkers: 1, // [!code ++]
    vmMemoryLimit: '300Mb', // [!code ++]
  }
})
ts [Isolation per project]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        // Non-isolated unit tests
        name: 'Unit tests',
        isolate: false,
        exclude: ['**.integration.test.ts'],
      },
      {
        // Isolated integration tests
        name: 'Integration tests',
        include: ['**.integration.test.ts'],
      },
    ],
  },
})
ts [Parallel & Sequential projects]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        name: 'Parallel',
        exclude: ['**.sequantial.test.ts'],
      },
      {
        name: 'Sequential',
        include: ['**.sequantial.test.ts'],
        fileParallelism: false,
      },
    ],
  },
})
ts [Node CLI options per project]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        name: 'Production env',
        execArgv: ['--env-file=.env.prod']
      },
      {
        name: 'Staging env',
        execArgv: ['--env-file=.env.staging']
      },
    ],
  },
})
ts
export default defineConfig({
  test: {
    reporters: [
      ['default', { summary: false }]
    ]
  }
})
ts
export default defineConfig({
  test: {
    reporters: ['verbose'], // [!code --]
    reporters: ['tree'], // [!code ++]
  }
})
js{15-22}
// before Vite 4.0
exports[`custom element with shadow root 1`] = `
"<body>
  <div>
    <custom-element />
  </div>
</body>"
`

// after Vite 4.0
exports[`custom element with shadow root 1`] = `
"<body>
  <div>
    <custom-element>
      #shadow-root
        <span
          class="some-name"
          data-test-id="33"
          id="5"
        >
          hello
        </span>
    </custom-element>
  </div>
</body>"
`
ts
test('example', () => { /* ... */ }, { retry: 2 }) // [!code --]
test('example', { retry: 2 }, () => { /* ... */ }) // [!code ++]
ts
test('example', () => { /* ... */ }, 1000) // ✅
ts
const mock = vi.fn()
const state = mock.mock
mock.mockClear()

expect(state).toBe(mock.mock) // fails in Jest
ts
jest.mock('./some-path', () => 'hello') // [!code --]
vi.mock('./some-path', () => ({ // [!code ++]
  default: 'hello', // [!code ++]
})) // [!code ++]
ts
const { cloneDeep } = jest.requireActual('lodash/cloneDeep') // [!code --]
const { cloneDeep } = await vi.importActual('lodash/cloneDeep') // [!code ++]

server.deps.inline: ["lib-name"]
diff
- `${describeTitle} ${testTitle}`
+ `${describeTitle} > ${testTitle}`
ts
beforeEach(() => setActivePinia(createTestingPinia())) // [!code --]
beforeEach(() => { setActivePinia(createTestingPinia()) }) // [!code ++]
ts
export default defineConfig({
  test: {
    sequence: { // [!code ++]
      hooks: 'list', // [!code ++]
    } // [!code ++]
  }
})
ts
let fn: jest.Mock<(name: string) => number> // [!code --]
import type { Mock } from 'vitest' // [!code ++]
let fn: Mock<(name: string) => number> // [!code ++]
ts
jest.setTimeout(5_000) // [!code --]
vi.setConfig({ testTimeout: 5_000 }) // [!code ++]
js [vitest.config.js]
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    snapshotSerializers: ['jest-serializer-vue']
  }
})
```

Otherwise your snapshots will have a lot of escaped `"` characters.

---
url: /guide/mocking.md
---

**Examples:**

Example 1 (unknown):
```unknown
:::

### Replacing `vite-node` with [Module Runner](https://vite.dev/guide/api-environment-runtimes.html#modulerunner)

Module Runner is a successor to `vite-node` implemented directly in Vite. Vitest now uses it directly instead of having a wrapper around Vite SSR handler. This means that certain features are no longer available:

* `VITE_NODE_DEPS_MODULE_DIRECTORIES` environment variable was replaced with `VITEST_MODULE_DIRECTORIES`
* Vitest no longer injects `__vitest_executor` into every [test runner](/advanced/runner). Instead, it injects `moduleRunner` which is an instance of [`ModuleRunner`](https://vite.dev/guide/api-environment-runtimes.html#modulerunner)
* `vitest/execute` entry point was removed. It was always meant to be internal
* [Custom environments](/guide/environment) no longer need to provide a `transformMode` property. Instead, provide `viteEnvironment`. If it is not provided, Vitest will use the environment name to transform files on the server (see [`server.environments`](https://vite.dev/guide/api-environment-instances.html))
* `vite-node` is no longer a dependency of Vitest
* `deps.optimizer.web` was renamed to [`deps.optimizer.client`](/config/#deps-optimizer-client). You can also use any custom names to apply optimizer configs when using other server environments

Vite has its own externalization mechanism, but we decided to keep using the old one to reduce the amount of breaking changes. You can keep using [`server.deps`](/config/#server-deps) to inline or externalize packages.

This update should not be noticeable unless you rely on advanced features mentioned above.

### `workspace` is Replaced with `projects`

The `workspace` configuration option was renamed to [`projects`](/guide/projects) in Vitest 3.2. They are functionally the same, except you cannot specify another file as the source of your workspace (previously you could specify a file that would export an array of projects). Migrating to `projects` is easy, just move the code from `vitest.workspace.js` to `vitest.config.ts`:

::: code-group
```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown
:::

### Browser Provider Rework

In Vitest 4.0, the browser provider now accepts an object instead of a string (`'playwright'`, `'webdriverio'`). The `preview` is no longer a default. This makes it simpler to work with custom options and doesn't require adding `/// <reference` comments anymore.
```

Example 4 (unknown):
```unknown
The naming of properties in `playwright` factory now also aligns with [Playwright documentation](https://playwright.dev/docs/api/class-testoptions#test-options-launch-options) making it easier to find.

With this change, the `@vitest/browser` package is no longer needed, and you can remove it from your dependencies. To support the context import, you should update the `@vitest/browser/context` to `vitest/browser`:
```

---

## TestCase

**URL:** llms-txt#testcase

**Contents:**
- project
- module
- name
- fullName
- id
- location
- parent
- options
- ok
- meta

The `TestCase` class represents a single test. This class is only available in the main thread. Refer to the ["Runner API"](/advanced/runner#tasks) if you are working with runtime tasks.

The `TestCase` instance always has a `type` property with the value of `test`. You can use it to distinguish between different task types:

This references the [`TestProject`](/advanced/api/test-project) that the test belongs to.

This is a direct reference to the [`TestModule`](/advanced/api/test-module) where the test is defined.

This is a test name that was passed to the `test` function.

The name of the test including all parent suites separated with `>` symbol. This test has a full name "the validation logic > the validation works correctly":

This is test's unique identifier. This ID is deterministic and will be the same for the same test across multiple runs. The ID is based on the [project](/advanced/api/test-project) name, module ID and test order.

The ID looks like this:

::: tip
You can generate file hash with `generateFileHash` function from `vitest/node` which is available since Vitest 3:

::: danger
Don't try to parse the ID. It can have a minus at the start: `-1223128da3_0_0_0`.
:::

The location in the module where the test was defined. Locations are collected only if [`includeTaskLocation`](/config/#includetasklocation) is enabled in the config. Note that this option is automatically enabled if `--reporter=html`, `--ui` or `--browser` flags are used.

The location of this test will be equal to `{ line: 3, column: 1 }`:

Parent [suite](/advanced/api/test-suite). If the test was called directly inside the [module](/advanced/api/test-module), the parent will be the module itself.

The options that test was collected with.

Checks if the test did not fail the suite. If the test is not finished yet or was skipped, it will return `true`.

Custom [metadata](/advanced/metadata) that was attached to the test during its execution. The meta can be attached by assigning a property to the `ctx.task.meta` object during a test run:

If the test did not finish running yet, the meta will be an empty object.

Test results. If test is not finished yet or was just collected, it will be equal to `TestResultPending`:

If the test was skipped, the return value will be `TestResultSkipped`:

::: tip
If the test was skipped because another test has `only` flag, the `options.mode` will be equal to `skip`.
:::

If the test failed, the return value will be `TestResultFailed`:

If the test passed, the return value will be `TestResultPassed`:

::: warning
Note that the test with `passed` state can still have errors attached - this can happen if `retry` was triggered at least once.
:::

Useful information about the test like duration, memory usage, etc:

::: info
`diagnostic()` will return `undefined` if the test was not scheduled to run yet.
:::

---
url: /advanced/api/test-collection.md
---

**Examples:**

Example 1 (ts):
```ts
if (task.type === 'test') {
  task // TestCase
}
```

Example 2 (ts):
```ts
import { test } from 'vitest'

// [!code word:'the validation works correctly']
test('the validation works correctly', () => {
  // ...
})
```

Example 3 (ts):
```ts
import { describe, test } from 'vitest'

// [!code word:'the validation works correctly']
// [!code word:'the validation logic']
describe('the validation logic', () => {
  test('the validation works correctly', () => {
    // ...
  })
})
```

Example 4 (unknown):
```unknown
1223128da3_0_0
^^^^^^^^^^ the file hash
           ^ suite index
             ^ test index
```

---

## As each process needs 1 main thread, there's 7 threads for test runners (1+7)*4 = 32

**URL:** llms-txt#as-each-process-needs-1-main-thread,-there's-7-threads-for-test-runners-(1+7)*4-=-32

---

## Mocks

**URL:** llms-txt#mocks

**Contents:**
- getMockImplementation
- getMockName
- mockClear
- mockName
- mockImplementation
- mockImplementationOnce
- withImplementation
- mockRejectedValue
- mockRejectedValueOnce
- mockReset

You can create a mock function or a class to track its execution with the `vi.fn` method. If you want to track a property on an already created object, you can use the `vi.spyOn` method:

You should use mock assertions (e.g., [`toHaveBeenCalled`](/api/expect#tohavebeencalled)) on [`expect`](/api/expect) to assert mock results. This API reference describes available properties and methods to manipulate mock behavior.

::: warning IMPORTANT
Vitest spies inherit implementation's [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) property when initialized, but it doesn't override it if the implementation was changed later:

::: tip
The custom function implementation in the types below is marked with a generic `<T>`.
:::

## getMockImplementation

Returns the current mock implementation if there is one.

If the mock was created with [`vi.fn`](/api/vi#vi-fn), it will use the provided method as the mock implementation.

If the mock was created with [`vi.spyOn`](/api/vi#vi-spyon), it will return `undefined` unless a custom implementation is provided.

Use it to return the name assigned to the mock with the `.mockName(name)` method. By default, `vi.fn()` mocks will return `'vi.fn()'`, while spies created with `vi.spyOn` will keep the original name.

Clears all information about every call. After calling it, all properties on `.mock` will return to their initial state. This method does not reset implementations. It is useful for cleaning up mocks between different assertions.

To automatically call this method before each test, enable the [`clearMocks`](/config/#clearmocks) setting in the configuration.

Sets the internal mock name. This is useful for identifying the mock when an assertion fails.

## mockImplementation

Accepts a function to be used as the mock implementation. TypeScript expects the arguments and return type to match those of the original function.

## mockImplementationOnce

Accepts a function to be used as the mock implementation. TypeScript expects the arguments and return type to match those of the original function. This method can be chained to produce different results for multiple function calls.

When the mocked function runs out of implementations, it will invoke the default implementation set with `vi.fn(() => defaultValue)` or `.mockImplementation(() => defaultValue)` if they were called:

## withImplementation

Overrides the original mock implementation temporarily while the callback is being executed.

Can be used with an asynchronous callback. The method has to be awaited to use the original implementation afterward.

Note that this method takes precedence over the [`mockImplementationOnce`](#mockimplementationonce).

Accepts an error that will be rejected when an async function is called.

## mockRejectedValueOnce

Accepts a value that will be rejected during the next function call. If chained, each consecutive call will reject the specified value.

Does what [`mockClear`](#mockClear) does and resets the mock implementation. This also resets all "once" implementations.

Note that resetting a mock from `vi.fn()` will set the implementation to an empty function that returns `undefined`.
Resetting a mock from `vi.fn(impl)` will reset the implementation to `impl`.

This is useful when you want to reset a mock to its original state.

To automatically call this method before each test, enable the [`mockReset`](/config/#mockreset) setting in the configuration.

Does what [`mockReset`](#mockreset) does and restores the original descriptors of spied-on objects, if the mock was created with [`vi.spyOn`](/api/vi#vi-spyon).

`mockRestore` on a `vi.fn()` mock is identical to [`mockReset`](#mockreset).

To automatically call this method before each test, enable the [`restoreMocks`](/config/#restoremocks) setting in the configuration.

Accepts a value that will be resolved when the async function is called. TypeScript will only accept values that match the return type of the original function.

## mockResolvedValueOnce

Accepts a value that will be resolved during the next function call. TypeScript will only accept values that match the return type of the original function. If chained, each consecutive call will resolve the specified value.

Use this if you need to return the `this` context from the method without invoking the actual implementation. This is a shorthand for:

Accepts a value that will be returned whenever the mock function is called. TypeScript will only accept values that match the return type of the original function.

## mockReturnValueOnce

Accepts a value that will be returned whenever the mock function is called. TypeScript will only accept values that match the return type of the original function.

When the mocked function runs out of implementations, it will invoke the default implementation set with `vi.fn(() => defaultValue)` or `.mockImplementation(() => defaultValue)` if they were called:

This is an array containing all arguments for each call. One item of the array is the arguments of that call.

:::warning Objects are Stored by Reference
Note that Vitest always stores objects by reference in all properies of the `mock` state. This means that if the properties were changed by your code, then some assertions like [`.toHaveBeenCalledWith`](/api/expect#tohavebeencalledwith) will not pass:

In this case you can clone the argument yourself:

This contains the arguments of the last call. If the mock wasn't called, it will return `undefined`.

This is an array containing all values that were `returned` from the function. One item of the array is an object with properties `type` and `value`. Available types are:

* `'return'` - function returned without throwing.
* `'throw'` - function threw a value.
* `'incomplete'` - the function did not finish running yet.

The `value` property contains the returned value or thrown error. If the function returned a `Promise`, then `result` will always be `'return'` even if the promise was rejected.

## mock.settledResults

An array containing all values that were resolved or rejected by the function.

If the function returned non-promise values, the `value` will be kept as is, but the `type` will still says `fulfilled` or `rejected`.

Until the value is resolved or rejected, the `settledResult` type will be `incomplete`.

## mock.invocationCallOrder

This property returns the order of the mock function's execution. It is an array of numbers that are shared between all defined mocks.

This property is an array of `this` values used during each call to the mock function.

This property is an array containing all instances that were created when the mock was called with the `new` keyword. Note that this is the actual context (`this`) of the function, not a return value.

::: warning
If the mock was instantiated with `new MyClass()`, then `mock.instances` will be an array with one value:

If you return a value from the constructor, it will not be in the `instances` array, but instead inside `results`:

---
url: /guide/browser/multiple-setups.md
---

**Examples:**

Example 1 (js):
```js
import { vi } from 'vitest'

const fn = vi.fn()
fn('hello world')
fn.mock.calls[0] === ['hello world']

const market = {
  getApples: () => 100
}

const getApplesSpy = vi.spyOn(market, 'getApples')
market.getApples()
getApplesSpy.mock.calls.length === 1
```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown
:::

::: tip
The custom function implementation in the types below is marked with a generic `<T>`.
:::

## getMockImplementation
```

Example 4 (unknown):
```unknown
Returns the current mock implementation if there is one.

If the mock was created with [`vi.fn`](/api/vi#vi-fn), it will use the provided method as the mock implementation.

If the mock was created with [`vi.spyOn`](/api/vi#vi-spyon), it will return `undefined` unless a custom implementation is provided.

## getMockName
```

---

## Visual Regression Testing

**URL:** llms-txt#visual-regression-testing

**Contents:**
- Why Visual Regression Testing?
- Getting Started
  - Creating References
  - Screenshot Organization
  - Updating References
- How Visual Tests Work
- Configuring Visual Tests
  - Global Configuration
  - Per-Test Configuration
- Best Practices

Vitest can run visual regression tests out of the box. It captures screenshots
of your UI components and pages, then compares them against reference images to
detect unintended visual changes.

Unlike functional tests that verify behavior, visual tests catch styling issues,
layout shifts, and rendering problems that might otherwise go unnoticed without
thorough manual testing.

## Why Visual Regression Testing?

Visual bugs don’t throw errors, they just look wrong. That’s where visual
testing comes in.

* That button still submits the form... but why is it hot pink now?
* The text fits perfectly... until someone views it on mobile
* Everything works great... except those two containers are out of viewport
* That careful CSS refactor works... but broke the layout on a page no one tests

Visual regression testing acts as a safety net for your UI, automatically
catching these visual changes before they reach production.

::: warning Browser Rendering Differences
Visual regression tests are **inherently unstable across different
environments**. Screenshots will look different on different machines because
of:

* Font rendering (the big one. Windows, macOS, Linux, they all render text
  differently)
* GPU drivers and hardware acceleration
* Whether you're running headless or not
* Browser settings and versions
* ...and honestly, sometimes just the phase of the moon

That's why Vitest includes the browser and platform in screenshot names (like
`button-chromium-darwin.png`).

For stable tests, use the same environment everywhere. We **strongly recommend**
cloud services like
[Azure App Testing](https://azure.microsoft.com/en-us/products/app-testing/)
or [Docker containers](https://playwright.dev/docs/docker).
:::

Visual regression testing in Vitest can be done through the
[`toMatchScreenshot` assertion](/guide/browser/assertion-api.html#tomatchscreenshot):

### Creating References

When you run a visual test for the first time, Vitest creates a reference (also
called baseline) screenshot and fails the test with the following error message:

This is normal. Check that the screenshot looks right, then run the test again.
Vitest will now compare future runs against this baseline.

::: tip
Reference screenshots live in `__screenshots__` folders next to your tests.
**Don't forget to commit them!**
:::

### Screenshot Organization

By default, screenshots are organized as:

The naming convention includes:

* **Test name**: either the first argument of the `toMatchScreenshot()` call,
  or automatically generated from the test's name.
* **Browser name**: `chrome`, `chromium`, `firefox` or `webkit`.
* **Platform**: `aix`, `darwin`, `freebsd`, `linux`, `openbsd`, `sunos`, or
  `win32`.

This ensures screenshots from different environments don't overwrite each other.

### Updating References

When you intentionally change your UI, you'll need to update the reference
screenshots:

Review updated screenshots before committing to make sure changes are
intentional.

## How Visual Tests Work

Visual regression tests need stable screenshots to compare against. But pages aren't instantly stable as images load, animations finish, fonts render, and layouts settle.

Vitest handles this automatically through "Stable Screenshot Detection":

1. Vitest takes a first screenshot (or uses the reference screenshot if available) as baseline
2. It takes another screenshot and compares it with the baseline
   * If the screenshots match, the page is stable and testing continues
   * If they differ, Vitest uses the newest screenshot as the baseline and repeats
3. This continues until stability is achieved or the timeout is reached

This ensures that transient visual changes (like loading spinners or animations) don't cause false failures. If something never stops animating though, you'll hit the timeout, so consider [disabling animations during testing](#disable-animations).

If a stable screenshot is captured after retries (one or more) and a reference screenshot exists, Vitest performs a final comparison with the reference using `createDiff: true`. This will generate a diff image if they don't match.

During stability detection, Vitest calls comparators with `createDiff: false` since it only needs to know if screenshots match. This keeps the detection process fast.

## Configuring Visual Tests

### Global Configuration

Configure visual regression testing defaults in your
[Vitest config](/guide/browser/config#browser-expect-tomatchscreenshot):

### Per-Test Configuration

Override global settings for specific tests:

### Test Specific Elements

Unless you explicitly want to test the whole page, prefer capturing specific
components to reduce false positives:

### Handle Dynamic Content

Dynamic content like timestamps, user data, or random values will cause tests
to fail. You can either mock the sources of dynamic content or mask them when
using the Playwright provider by using the
[`mask` option](https://playwright.dev/docs/api/class-page#page-screenshot-option-mask)
in `screenshotOptions`.

### Disable Animations

Animations can cause flaky tests. Disable them during testing by injecting
a custom CSS snippet:

::: tip
When using the Playwright provider, animations are automatically disabled
when using the assertion: the `animations` option's value in `screenshotOptions`
is set to `"disabled"` by default.
:::

### Set Appropriate Thresholds

Tuning thresholds is tricky. It depends on the content, test environment,
what's acceptable for your app, and might also change based on the test.

Vitest does not set a default for the mismatching pixels, that's up for the
user to decide based on their needs. The recommendation is to use
`allowedMismatchedPixelRatio`, so that the threshold is computed on the size
of the screenshot and not a fixed number.

When setting both `allowedMismatchedPixelRatio` and
`allowedMismatchedPixels`, Vitest uses whichever limit is stricter.

### Set consistent viewport sizes

As the browser instance might have a different default size, it's best to
set a specific viewport size, either on the test or the instance
configuration:

Store reference screenshots in
[Git LFS](https://github.com/git-lfs/git-lfs?tab=readme-ov-file) if you plan to
have a large test suite.

## Debugging Failed Tests

When a visual test fails, Vitest provides three images to help debug:

1. **Reference screenshot**: the expected baseline image
2. **Actual screenshot**: what was captured during the test
3. **Diff image**: highlights the differences, but this might not get generated

You'll see something like:

### Understanding the diff image

* **Red pixels** are areas that differ between reference and actual
* **Yellow pixels** are anti-aliasing differences (when anti-alias is not ignored)
* **Transparent/original** are unchanged areas

:::tip
If the diff is mostly red, something's really wrong. If it's speckled with a
few red pixels around text, you probably just need to bump your threshold.
:::

## Common Issues and Solutions

### False Positives from Font Rendering

Font availability and rendering varies significantly between systems. Some
possible solutions might be to:

* Use web fonts and wait for them to load:

* Increase comparison threshold for text-heavy areas:

* Use a cloud service or containerized environment for consistent font rendering.

### Flaky Tests or Different Screenshot Sizes

If tests pass and fail randomly, or if screenshots have different dimensions
between runs:

* Wait for everything to load, including loading indicators
* Set explicit viewport sizes: `await page.viewport(1920, 1080)`
* Check for responsive behavior at viewport boundaries
* Check for unintended animations or transitions
* Increase test timeout for large screenshots
* Use a cloud service or containerized environment

## Visual Regression Testing for Teams

Remember when we mentioned visual tests need a stable environment? Well, here's
the thing: your local machine isn't it.

For teams, you've basically got three options:

1. **Self-hosted runners**, complex to set up, painful to maintain
2. **GitHub Actions**, free (for open source), works with any provider
3. **Cloud services**, like
   [Azure App Testing](https://azure.microsoft.com/en-us/products/app-testing/),
   built for this exact problem

We'll focus on options 2 and 3 since they're the quickest to get running.

To be upfront, the main trade-offs for each are:

* **GitHub Actions**: visual tests only run in CI (developers can't run them
  locally)
* **Microsoft's service**: works everywhere but costs money and only works
  with Playwright

:::: tabs key:vrt-for-teams
\=== GitHub Actions

The trick here is keeping visual tests separate from your regular tests,
otherwise, you'll waste hours checking failing logs of screenshot mismatches.

#### Organizing Your Tests

First, isolate your visual tests. Stick them in a `visual` folder (or whatever
makes sense for your project):

Now developers can run `npm run test:unit` locally without visual tests getting
in the way. Visual tests stay in CI where the environment is consistent.

::: tip Alternative
Not a fan of glob patterns? You could also use separate
[Test Projects](/guide/projects) instead and run them using:

* `vitest --project unit`
* `vitest --project visual`
  :::

Your CI needs browsers installed. How you do this depends on your provider:

::: tabs key:provider
\== Playwright

[Playwright](https://npmjs.com/package/playwright) makes this easy. Just pin
your version and add this before running tests:

```yaml [.github/workflows/ci.yml]

**Examples:**

Example 1 (ts):
```ts
import { expect, test } from 'vitest'
import { page } from 'vitest/browser'

test('hero section looks correct', async () => {
  // ...the rest of the test

  // capture and compare screenshot
  await expect(page.getByTestId('hero')).toMatchScreenshot('hero-section')
})
```

Example 2 (unknown):
```unknown
expect(element).toMatchScreenshot()

No existing reference screenshot found; a new one was created. Review it before running tests again.

Reference screenshot:
  tests/__screenshots__/hero.test.ts/hero-section-chromium-darwin.png
```

Example 3 (unknown):
```unknown
.
├── __screenshots__
│   └── test-file.test.ts
│       ├── test-name-chromium-darwin.png
│       ├── test-name-firefox-linux.png
│       └── test-name-webkit-win32.png
└── test-file.test.ts
```

Example 4 (bash):
```bash
$ vitest --update
```

---

## Test Projects

**URL:** llms-txt#test-projects

**Contents:**
- Defining Projects
- Running Tests
- Configuration

::: tip Sample Project

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/projects) - [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/projects?initialPath=__vitest__/)

::: warning
This feature is also known as a `workspace`. The `workspace` is deprecated since 3.2 and replaced with the `projects` configuration. They are functionally the same.
:::

Vitest provides a way to define multiple project configurations within a single Vitest process. This feature is particularly useful for monorepo setups but can also be used to run tests with different configurations, such as `resolve.alias`, `plugins`, or `test.browser` and more.

You can define projects in your root [config](/config/):

Project configurations are inlined configs, files, or glob patterns referencing your projects. For example, if you have a folder named `packages` that contains your projects, you can define an array in your root Vitest config:

Vitest will treat every folder in `packages` as a separate project even if it doesn't have a config file inside. If the glob pattern matches a file, it will validate that the name starts with `vitest.config`/`vite.config` or matches `(vite|vitest).*.config.*` pattern to ensure it's a Vitest configuration file. For example, these config files are valid:

* `vitest.config.ts`
* `vite.config.js`
* `vitest.unit.config.ts`
* `vite.e2e.config.js`
* `vitest.config.unit.js`
* `vite.config.e2e.js`

To exclude folders and files, you can use the negation pattern:

If you have a nested structure where some folders need to be projects, but other folders have their own subfolders, you have to use brackets to avoid matching the parent folder:

::: warning
Vitest does not treat the root `vitest.config` file as a project unless it is explicitly specified in the configuration. Consequently, the root configuration will only influence global options such as `reporters` and `coverage`. Note that Vitest will always run certain plugin hooks, like `apply`, `config`, `configResolved` or `configureServer`, specified in the root config file. Vitest also uses the same plugins to execute global setups and custom coverage provider.
:::

You can also reference projects with their config files:

This pattern will only include projects with a `vitest.config` file that contains `e2e` or `unit` before the extension.

You can also define projects using inline configuration. The configuration supports both syntaxes simultaneously.

::: warning
All projects must have unique names; otherwise, Vitest will throw an error. If a name is not provided in the inline configuration, Vitest will assign a number. For project configurations defined with glob syntax, Vitest will default to using the "name" property in the nearest `package.json` file or, if none exists, the folder name.
:::

Projects do not support all configuration properties. For better type safety, use the `defineProject` method instead of `defineConfig` within project configuration files:

To run tests, define a script in your root `package.json`:

Now tests can be run using your package manager:

If you need to run tests only inside a single project, use the `--project` CLI option:

::: tip
CLI option `--project` can be used multiple times to filter out several projects:

None of the configuration options are inherited from the root-level config file. You can create a shared config file and merge it with the project config yourself:

Additionally, you can use the `extends` option to inherit from your root-level configuration. All options will be merged.

::: danger Unsupported Options
Some of the configuration options are not allowed in a project config. Most notably:

* `coverage`: coverage is done for the whole process
* `reporters`: only root-level reporters can be supported
* `resolveSnapshotPath`: only root-level resolver is respected
* all other options that don't affect test runners

All configuration options that are not supported inside a project configuration are marked with a  sign in the ["Config"](/config/) guide. They have to be defined once in the root config file.
:::

---
url: /advanced/api/test-case.md
---

**Examples:**

Example 1 (unknown):
```unknown
Project configurations are inlined configs, files, or glob patterns referencing your projects. For example, if you have a folder named `packages` that contains your projects, you can define an array in your root Vitest config:
```

Example 2 (unknown):
```unknown
Vitest will treat every folder in `packages` as a separate project even if it doesn't have a config file inside. If the glob pattern matches a file, it will validate that the name starts with `vitest.config`/`vite.config` or matches `(vite|vitest).*.config.*` pattern to ensure it's a Vitest configuration file. For example, these config files are valid:

* `vitest.config.ts`
* `vite.config.js`
* `vitest.unit.config.ts`
* `vite.e2e.config.js`
* `vitest.config.unit.js`
* `vite.config.e2e.js`

To exclude folders and files, you can use the negation pattern:
```

Example 3 (unknown):
```unknown
If you have a nested structure where some folders need to be projects, but other folders have their own subfolders, you have to use brackets to avoid matching the parent folder:
```

Example 4 (unknown):
```unknown
::: warning
Vitest does not treat the root `vitest.config` file as a project unless it is explicitly specified in the configuration. Consequently, the root configuration will only influence global options such as `reporters` and `coverage`. Note that Vitest will always run certain plugin hooks, like `apply`, `config`, `configResolved` or `configureServer`, specified in the root config file. Vitest also uses the same plugins to execute global setups and custom coverage provider.
:::

You can also reference projects with their config files:
```

---

## Browser Mode {#browser-mode}

**URL:** llms-txt#browser-mode-{#browser-mode}

**Contents:**
- Installation
  - Manual Installation
- Configuration
- Browser Option Types
- Browser Compatibility
- Running Tests
- Headless
- Examples
- Limitations
  - Thread Blocking Dialogs

This page provides information about the browser mode feature in the Vitest API, which allows you to run your tests in the browser natively, providing access to browser globals like window and document.

::: tip
If you are looking for documentation for `expect`, `vi` or any general API like test projects or type testing, refer to the ["Getting Started" guide](/guide/).
:::

For easier setup, you can use `vitest init browser` command to install required dependencies and create browser configuration.

### Manual Installation

You can also install packages manually. Vitest always requires a provider to be defined. You can chose either [`preview`](/guide/browser/preview), [`playwright`](/guide/browser/playwright) or [`webdriverio`](/guide/browser/webdriverio).

If you want to just preview how your tests look, you can use the `preview` provider:

::: warning
However, to run tests in CI you need to install either [`playwright`](https://npmjs.com/package/playwright) or [`webdriverio`](https://www.npmjs.com/package/webdriverio). We also recommend switching to either one of them for testing locally instead of using the default `preview` provider since it relies on simulating events instead of using Chrome DevTools Protocol.

If you don't already use one of these tools, we recommend starting with Playwright because it supports parallel execution, which makes your tests run faster.

::: tabs key:provider
\== Playwright
[Playwright](https://npmjs.com/package/playwright) is a framework for Web Testing and Automation.

[WebdriverIO](https://www.npmjs.com/package/webdriverio) allows you to run tests locally using the WebDriver protocol.

To activate browser mode in your Vitest configuration, set the `browser.enabled` field to `true` in your Vitest configuration file. Here is an example configuration using the browser field:

::: info
Vitest assigns port `63315` to avoid conflicts with the development server, allowing you to run both in parallel. You can change that with the [`browser.api`](/config/#browser-api) option.

Since Vitest 2.1.5, the CLI no longer prints the Vite URL automatically. You can press "b" to print the URL when running in watch mode.
:::

If you have not used Vite before, make sure you have your framework's plugin installed and specified in the config. Some frameworks might require extra configuration to work - check their Vite related documentation to be sure.

If you need to run some tests using Node-based runner, you can define a [`projects`](/guide/projects) option with separate configurations for different testing strategies:

## Browser Option Types

The browser option in Vitest depends on the provider. Vitest will fail, if you pass `--browser` and don't specify its name in the config file. Available options:

* `webdriverio` supports these browsers:
  * `firefox`
  * `chrome`
  * `edge`
  * `safari`
* `playwright` supports these browsers:
  * `firefox`
  * `webkit`
  * `chromium`

## Browser Compatibility

Vitest uses [Vite dev server](https://vitejs.dev/guide/#browser-support) to run your tests, so we only support features specified in the [`esbuild.target`](https://vitejs.dev/config/shared-options.html#esbuild) option (`esnext` by default).

By default, Vite targets browsers which support the native [ES Modules](https://caniuse.com/es6-module), native [ESM dynamic import](https://caniuse.com/es6-module-dynamic-import), and [`import.meta`](https://caniuse.com/mdn-javascript_operators_import_meta). On top of that, we utilize [`BroadcastChannel`](https://caniuse.com/?search=BroadcastChannel) to communicate between iframes:

* Chrome >=87
* Firefox >=78
* Safari >=15.4
* Edge >=88

When you specify a browser name in the browser option, Vitest will try to run the specified browser using `preview` by default, and then run the tests there. If you don't want to use `preview`, you can configure the custom browser provider by using `browser.provider` option.

To specify a browser using the CLI, use the `--browser` flag followed by the browser name, like this:

Or you can provide browser options to CLI with dot notation:

::: warning
Since Vitest 3.2, if you don't have the `browser` option in your config but specify the `--browser` flag, Vitest will fail because it can't assume that config is meant for the browser and not Node.js tests.
:::

By default, Vitest will automatically open the browser UI for development. Your tests will run inside an iframe in the center. You can configure the viewport by selecting the preferred dimensions, calling `page.viewport` inside the test, or setting default values in [the config](/config/#browser-viewport).

Headless mode is another option available in the browser mode. In headless mode, the browser runs in the background without a user interface, which makes it useful for running automated tests. The headless option in Vitest can be set to a boolean value to enable or disable headless mode.

When using headless mode, Vitest won't open the UI automatically. If you want to continue using the UI but have tests run headlessly, you can install the [`@vitest/ui`](/guide/ui) package and pass the `--ui` flag when running Vitest.

Here's an example configuration enabling headless mode:

You can also set headless mode using the `--browser.headless` flag in the CLI, like this:

In this case, Vitest will run in headless mode using the Chrome browser.

::: warning
Headless mode is not available by default. You need to use either [`playwright`](https://npmjs.com/package/playwright) or [`webdriverio`](https://www.npmjs.com/package/webdriverio) providers to enable this feature.
:::

By default, you don't need any external packages to work with the Browser Mode:

However, Vitest also provides packages to render components for several popular frameworks out of the box:

* [`vitest-browser-vue`](https://github.com/vitest-dev/vitest-browser-vue) to render [vue](https://vuejs.org) components
* [`vitest-browser-svelte`](https://github.com/vitest-dev/vitest-browser-svelte) to render [svelte](https://svelte.dev) components
* [`vitest-browser-react`](https://github.com/vitest-dev/vitest-browser-react) to render [react](https://react.dev) components

Community packages are available for other frameworks:

* [`vitest-browser-lit`](https://github.com/EskiMojo14/vitest-browser-lit) to render [lit](https://lit.dev) components
* [`vitest-browser-preact`](https://github.com/JoviDeCroock/vitest-browser-preact) to render [preact](https://preactjs.com) components
* [`vitest-browser-qwik`](https://github.com/kunai-consulting/vitest-browser-qwik) to render [qwik](https://qwik.dev) components

If your framework is not represented, feel free to create your own package - it is a simple wrapper around the framework renderer and `page.elementLocator` API. We will add a link to it on this page. Make sure it has a name starting with `vitest-browser-`.

Besides rendering components and locating elements, you will also need to make assertions. Vitest forks the [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) library to provide a wide range of DOM assertions out of the box. Read more at the [Assertions API](/guide/browser/assertion-api).

Vitest exposes a [Context API](/guide/browser/context) with a small set of utilities that might be useful to you in tests. For example, if you need to make an interaction, like clicking an element or typing text into an input, you can use `userEvent` from `vitest/browser`. Read more at the [Interactivity API](/guide/browser/interactivity-api).

Vitest doesn't support all frameworks out of the box, but you can use external tools to run tests with these frameworks. We also encourage the community to create their own `vitest-browser` wrappers - if you have one, feel free to add it to the examples above.

For unsupported frameworks, we recommend using `testing-library` packages:

* [`@solidjs/testing-library`](https://testing-library.com/docs/solid-testing-library/intro) to render [solid](https://www.solidjs.com) components
* [`@marko/testing-library`](https://testing-library.com/docs/marko-testing-library/intro) to render [marko](https://markojs.com) components

You can also see more examples in [`browser-examples`](https://github.com/vitest-tests/browser-examples) repository.

::: warning
`testing-library` provides a package `@testing-library/user-event`. We do not recommend using it directly because it simulates events instead of actually triggering them - instead, use [`userEvent`](/guide/browser/interactivity-api) imported from `vitest/browser` that uses Chrome DevTools Protocol or Webdriver (depending on the provider) under the hood.
:::

### Thread Blocking Dialogs

When using Vitest Browser, it's important to note that thread blocking dialogs like `alert` or `confirm` cannot be used natively. This is because they block the web page, which means Vitest cannot continue communicating with the page, causing the execution to hang.

In such situations, Vitest provides default mocks with default returned values for these APIs. This ensures that if the user accidentally uses synchronous popup web APIs, the execution would not hang. However, it's still recommended for the user to mock these web APIs for better experience. Read more in [Mocking](/guide/mocking).

### Spying on Module Exports

Browser Mode uses the browser's native ESM support to serve modules. The module namespace object is sealed and can't be reconfigured, unlike in Node.js tests where Vitest can patch the Module Runner. This means you can't call `vi.spyOn` on an imported object:

To bypass this limitation, Vitest supports `{ spy: true }` option in `vi.mock('./module.js')`. This will automatically spy on every export in the module without replacing them with fake ones.

However, the only way to mock exported *variables* is to export a method that will change the internal value:

---
url: /guide/cli.md
---

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown

```

Example 4 (unknown):
```unknown
:::

### Manual Installation

You can also install packages manually. Vitest always requires a provider to be defined. You can chose either [`preview`](/guide/browser/preview), [`playwright`](/guide/browser/playwright) or [`webdriverio`](/guide/browser/webdriverio).

If you want to just preview how your tests look, you can use the `preview` provider:

::: code-group
```

---

## TestModule

**URL:** llms-txt#testmodule

**Contents:**
- moduleId
- relativeModuleId
- state
- meta 3.1.0 {#meta}
- diagnostic

The `TestModule` class represents a single module in a single project. This class is only available in the main thread. Refer to the ["Runner API"](/advanced/runner#tasks) if you are working with runtime tasks.

The `TestModule` instance always has a `type` property with the value of `module`. You can use it to distinguish between different task types:

::: warning Extending Suite Methods
The `TestModule` class inherits all methods and properties from the [`TestSuite`](/advanced/api/test-suite). This guide will only list methods and properties unique to the `TestModule`.
:::

This is usually an absolute unix file path (even on Windows). It can be a virtual id if the file is not on the disk. This value corresponds to Vite's `ModuleGraph` id.

Module id relative to the project. This is the same as `task.name` in the deprecated API.

Works the same way as [`testSuite.state()`](/advanced/api/test-suite#state), but can also return `queued` if module wasn't executed yet.

## meta 3.1.0 {#meta}

Custom [metadata](/advanced/metadata) that was attached to the module during its execution or collection. The meta can be attached by assigning a property to the `task.meta` object during a test run:

:::tip
If metadata was attached during collection (outside of the `test` function), then it will be available in [`onTestModuleCollected`](./reporters#ontestmodulecollected) hook in the custom reporter.
:::

Useful information about the module like duration, memory usage, etc. If the module was not executed yet, all diagnostic values will return `0`.

---
url: /advanced/api/test-project.md
---

**Examples:**

Example 1 (ts):
```ts
if (task.type === 'module') {
  task // TestModule
}
```

Example 2 (ts):
```ts
'C:/Users/Documents/project/example.test.ts' // ✅
'/Users/mac/project/example.test.ts' // ✅
'C:\\Users\\Documents\\project\\example.test.ts' // ❌
```

Example 3 (ts):
```ts
'project/example.test.ts' // ✅
'example.test.ts' // ✅
'project\\example.test.ts' // ❌
```

Example 4 (ts):
```ts
function state(): TestModuleState
```

---

## In Vitest v3 and below this command would ignore "math.test.ts" filename filter.

**URL:** llms-txt#in-vitest-v3-and-below-this-command-would-ignore-"math.test.ts"-filename-filter.

---

## TestCollection

**URL:** llms-txt#testcollection

**Contents:**
- size
- at
- array
- allSuites
- allTests
- tests
- suites

`TestCollection` represents a collection of top-level [suites](/advanced/api/test-suite) and [tests](/advanced/api/test-case) in a suite or a module. It also provides useful methods to iterate over itself.

::: info
Most methods return an iterator instead of an array for better performance in case you don't need every item in the collection. If you prefer working with array, you can spread the iterator: `[...children.allSuites()]`.

Also note that the collection itself is an iterator:

The number of tests and suites in the collection.

::: warning
This number includes only tests and suites at the top-level, it doesn't include nested suites and tests.
:::

Returns the test or suite at a specific index. This method accepts negative indexes.

The same collection but as an array. This is useful if you want to use `Array` methods like `map` and `filter` that are not supported by the `TaskCollection` implementation.

Filters all suites that are part of this collection and its children.

Filters all tests that are part of this collection and its children.

You can pass down a `state` value to filter tests by the state.

Filters only the tests that are part of this collection. You can pass down a `state` value to filter tests by the state.

Filters only the suites that are part of this collection.

---
url: /guide/testing-types.md
---

**Examples:**

Example 1 (ts):
```ts
for (const child of module.children) {
  console.log(child.type, child.name)
}
```

Example 2 (ts):
```ts
function at(index: number): TestCase | TestSuite | undefined
```

Example 3 (ts):
```ts
function array(): (TestCase | TestSuite)[]
```

Example 4 (ts):
```ts
function allSuites(): Generator<TestSuite, undefined, void>
```

---

## Test Annotations

**URL:** llms-txt#test-annotations

**Contents:**
- Built-in Reporters
  - default
  - verbose
  - html
  - junit
  - github-actions
  - tap

Vitest supports annotating your tests with custom messages and files via the [`context.annotate`](/guide/test-context#annotate) API. These annotations will be attached to the test case and passed down to reporters in the [`onTestAnnotate`](/advanced/api/reporters#ontestannotate) hook.

::: warning
The `annotate` function returns a Promise, so it needs to be awaited if you rely on it somehow. However, Vitest will also automatically await any non-awaited annotation before the test finishes.
:::

Depending on your reporter, you will see these annotations differently.

## Built-in Reporters

The `default` reporter prints annotations only if the test has failed:

The `verbose` reporter is the only terminal reporter that reports annotations when the test doesn't fail.

The HTML reporter shows annotations the same way the UI does. You can see the annotation on the line where it was called. At the moment, if the annotation wasn't called in a test file, you cannot see it in the UI. We are planning to support a separate test summary view where it will be visible.

The `junit` reporter lists annotations inside the testcase's `properties` tag. The JUnit reporter will ignore all attachments and will print only the type and the message.

The `github-actions` reporter will print the annotation as a [notice message](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions#setting-a-notice-message) by default. You can configure the `type` by passing down the second argument as `notice`, `warning` or `error`. If type is none of these, Vitest will show the message as a notice.

The `tap` and `tap-flat` reporters print annotations as diagnostic messages on a new line starting with a `#` symbol. They will ignore all attachments and will print only the type and message:

**Examples:**

Example 1 (ts):
```ts
test('hello world', async ({ annotate }) => {
  await annotate('this is my test')

  if (condition) {
    await annotate('this should\'ve errored', 'error')
  }

  const file = createTestSpecificFile()
  await annotate('creates a file', { body: file })
})
```

Example 2 (unknown):
```unknown
⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯

  FAIL  example.test.js > an example of a test with annotation
Error: thrown error
  ❯ example.test.js:11:21
      9 |    await annotate('annotation 1')
      10|    await annotate('annotation 2', 'warning')
      11|    throw new Error('thrown error')
        |          ^
      12|  })

  ❯ example.test.js:9:15 notice
    ↳ annotation 1
  ❯ example.test.js:10:15 warning
    ↳ annotation 2

  ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
```

Example 3 (unknown):
```unknown
✓ example.test.js > an example of a test with annotation

  ❯ example.test.js:9:15 notice
    ↳ annotation 1
  ❯ example.test.js:10:15 warning
    ↳ annotation 2
```

Example 4 (xml):
```xml
<testcase classname="basic/example.test.js" name="an example of a test with annotation" time="0.14315">
    <properties>
        <property name="notice" value="the message of the annotation">
        </property>
    </properties>
</testcase>
```

---

## In-Source Testing

**URL:** llms-txt#in-source-testing

**Contents:**
- Setup
- Production Build
  - Other Bundlers
- TypeScript
- Notes

Vitest provides a way to run tests within your source code along side the implementation, similar to [Rust's module tests](https://doc.rust-lang.org/book/ch11-03-test-organization.html#the-tests-module-and-cfgtest).

This makes the tests share the same closure as the implementations and able to test against private states without exporting. Meanwhile, it also brings a closer feedback loop for development.

::: warning
This guide explains how to write tests inside your source code. If you need to write tests in separate test files, follow the ["Writing Tests" guide](/guide/#writing-tests).
:::

To get started, put a `if (import.meta.vitest)` block at the end of your source file and write some tests inside it. For example:

Update the `includeSource` config for Vitest to grab the files under `src/`:

Then you can start to test!

For the production build, you will need to set the `define` options in your config file, letting the bundler do the dead code elimination. For example, in Vite

Learn more: [unbuild](https://github.com/unjs/unbuild)
:::

Learn more: [Rollup](https://rollupjs.org/)
:::

To get TypeScript support for `import.meta.vitest`, add `vitest/importMeta` to your `tsconfig.json`:

Reference to [`examples/in-source-test`](https://github.com/vitest-dev/vitest/tree/main/examples/in-source-test) for the full example.

This feature could be useful for:

* Unit testing for small-scoped functions or utilities
* Prototyping
* Inline Assertion

It's recommended to **use separate test files instead** for more complex tests like components or E2E testing.

---
url: /guide/browser/interactivity-api.md
---

**Examples:**

Example 1 (unknown):
```unknown
Update the `includeSource` config for Vitest to grab the files under `src/`:
```

Example 2 (unknown):
```unknown
Then you can start to test!
```

Example 3 (unknown):
```unknown
## Production Build

For the production build, you will need to set the `define` options in your config file, letting the bundler do the dead code elimination. For example, in Vite
```

Example 4 (unknown):
```unknown
### Other Bundlers

::: details unbuild
```

---

## Test Environment

**URL:** llms-txt#test-environment

**Contents:**
- Environments for Specific Files
- Custom Environment

Vitest provides [`environment`](/config/#environment) option to run code inside a specific environment. You can modify how environment behaves with [`environmentOptions`](/config/#environmentoptions) option.

By default, you can use these environments:

* `node` is default environment
* `jsdom` emulates browser environment by providing Browser API, uses [`jsdom`](https://github.com/jsdom/jsdom) package
* `happy-dom` emulates browser environment by providing Browser API, and considered to be faster than jsdom, but lacks some API, uses [`happy-dom`](https://github.com/capricorn86/happy-dom) package
* `edge-runtime` emulates Vercel's [edge-runtime](https://edge-runtime.vercel.app/), uses [`@edge-runtime/vm`](https://www.npmjs.com/package/@edge-runtime/vm) package

::: info
When using `jsdom` or `happy-dom` environments, Vitest follows the same rules that Vite does when importing [CSS](https://vitejs.dev/guide/features.html#css) and [assets](https://vitejs.dev/guide/features.html#static-assets). If importing external dependency fails with `unknown extension .css` error, you need to inline the whole import chain manually by adding all packages to [`server.deps.inline`](/config/#server-deps-inline). For example, if the error happens in `package-3` in this import chain: `source code -> package-1 -> package-2 -> package-3`, you need to add all three packages to `server.deps.inline`.

The `require` of CSS and assets inside the external dependencies are resolved automatically.
:::

::: warning
"Environments" exist only when running tests in Node.js.

`browser` is not considered an environment in Vitest. If you wish to run part of your tests using [Browser Mode](/guide/browser/), you can create a [test project](/guide/browser/#projects-config).
:::

## Environments for Specific Files

When setting `environment` option in your config, it will apply to all the test files in your project. To have more fine-grained control, you can use control comments to specify environment for specific files. Control comments are comments that start with `@vitest-environment` and are followed by the environment name:

## Custom Environment

You can create your own package to extend Vitest environment. To do so, create package with the name `vitest-environment-${name}` or specify a path to a valid JS/TS file. That package should export an object with the shape of `Environment`:

::: warning
Vitest requires `viteEnvironment` option on environment object (fallbacks to the Vitest environment name by default). It should be equal to `ssr`, `client` or any custom [Vite environment](https://vite.dev/guide/api-environment) name. This value determines which environment is used to process file.
:::

You also have access to default Vitest environments through `vitest/environments` entry:

Vitest also provides `populateGlobal` utility function, which can be used to move properties from object into the global namespace:

---
url: /guide/filtering.md
---

**Examples:**

Example 1 (ts):
```ts
// @vitest-environment jsdom

import { expect, test } from 'vitest'

test('test', () => {
  expect(typeof window).not.toBe('undefined')
})
```

Example 2 (ts):
```ts
import type { Environment } from 'vitest/environments'

export default <Environment>{
  name: 'custom',
  viteEnvironment: 'ssr',
  // optional - only if you support "experimental-vm" pool
  async setupVM() {
    const vm = await import('node:vm')
    const context = vm.createContext()
    return {
      getVmContext() {
        return context
      },
      teardown() {
        // called after all tests with this env have been run
      }
    }
  },
  setup() {
    // custom setup
    return {
      teardown() {
        // called after all tests with this env have been run
      }
    }
  }
}
```

Example 3 (ts):
```ts
import { builtinEnvironments, populateGlobal } from 'vitest/environments'

console.log(builtinEnvironments) // { jsdom, happy-dom, node, edge-runtime }
```

Example 4 (ts):
```ts
interface PopulateOptions {
  // should non-class functions be bind to the global namespace
  bindFunctions?: boolean
}

interface PopulateResult {
  // a list of all keys that were copied, even if value doesn't exist on original object
  keys: Set<string>
  // a map of original object that might have been overridden with keys
  // you can return these values inside `teardown` function
  originals: Map<string | symbol, any>
}

export function populateGlobal(global: any, original: any, options: PopulateOptions): PopulateResult
```

---

## assertType

**URL:** llms-txt#asserttype

::: warning
During runtime this function doesn't do anything. To [enable typechecking](/guide/testing-types#run-typechecking), don't forget to pass down `--typecheck` flag.
:::

* **Type:** `<T>(value: T): void`

You can use this function as an alternative for [`expectTypeOf`](/api/expect-typeof) to easily assert that the argument type is equal to the generic provided.

---
url: /guide/browser/config.md
---

**Examples:**

Example 1 (ts):
```ts
import { assertType } from 'vitest'

function concat(a: string, b: string): string
function concat(a: number, b: number): number
function concat(a: string | number, b: string | number): string | number

assertType<string>(concat('a', 'b'))
assertType<number>(concat(1, 2))
// @ts-expect-error wrong types
assertType(concat('a', 2))
```

---

## Start Vitest in standalone mode, without running any files on start

**URL:** llms-txt#start-vitest-in-standalone-mode,-without-running-any-files-on-start

---

## vitest interesting.test.ts

**URL:** llms-txt#vitest-interesting.test.ts

**Contents:**
  - describe.concurrent
  - describe.sequential
  - describe.shuffle
  - describe.todo
  - describe.each
  - describe.for
- Setup and Teardown
  - beforeEach
  - afterEach
  - beforeAll

ts
import { describe, test } from 'vitest'

// All suites and tests within this suite will be run in parallel
describe.concurrent('suite', () => {
  test('concurrent test 1', async () => { /* ... */ })
  describe('concurrent suite 2', async () => {
    test('concurrent test inner 1', async () => { /* ... */ })
    test('concurrent test inner 2', async () => { /* ... */ })
  })
  test.concurrent('concurrent test 3', async () => { /* ... */ })
})
ts
describe.concurrent(/* ... */)
describe.skip.concurrent(/* ... */) // or describe.concurrent.skip(/* ... */)
describe.only.concurrent(/* ... */) // or describe.concurrent.only(/* ... */)
describe.todo.concurrent(/* ... */) // or describe.concurrent.todo(/* ... */)
ts
describe.concurrent('suite', () => {
  test('concurrent test 1', async ({ expect }) => {
    expect(foo).toMatchSnapshot()
  })
  test('concurrent test 2', async ({ expect }) => {
    expect(foo).toMatchSnapshot()
  })
})
ts
import { describe, test } from 'vitest'

describe.concurrent('suite', () => {
  test('concurrent test 1', async () => { /* ... */ })
  test('concurrent test 2', async () => { /* ... */ })

describe.sequential('', () => {
    test('sequential test 1', async () => { /* ... */ })
    test('sequential test 2', async () => { /* ... */ })
  })
})
ts
import { describe, test } from 'vitest'

// or describe('suite', { shuffle: true }, ...)
describe.shuffle('suite', () => {
  test('random test 1', async () => { /* ... */ })
  test('random test 2', async () => { /* ... */ })
  test('random test 3', async () => { /* ... */ })

// `shuffle` is inherited
  describe('still random', () => {
    test('random 4.1', async () => { /* ... */ })
    test('random 4.2', async () => { /* ... */ })
  })

// disable shuffle inside
  describe('not random', { shuffle: false }, () => {
    test('in order 5.1', async () => { /* ... */ })
    test('in order 5.2', async () => { /* ... */ })
  })
})
// order depends on sequence.seed option in config (Date.now() by default)
ts
// An entry will be shown in the report for this suite
describe.todo('unimplemented suite')
ts
import { describe, expect, test } from 'vitest'

describe.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])('describe object add($a, $b)', ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected)
  })

test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected)
  })

test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected)
  })
})
ts
import { describe, expect, test } from 'vitest'

describe.each`
  a               | b      | expected
  ${1}            | ${1}   | ${2}
  ${'a'}          | ${'b'} | ${'ab'}
  ${[]}           | ${'b'} | ${'b'}
  ${{}}           | ${'b'} | ${'[object Object]b'}
  ${{ asd: 1 }}   | ${'b'} | ${'[object Object]b'}
`('describe template string add($a, $b)', ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected)
  })
})
ts
// `each` spreads array case
describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add(%i, %i) -> %i', (a, b, expected) => { // [!code --]
  test('test', () => {
    expect(a + b).toBe(expected)
  })
})

// `for` doesn't spread array case
describe.for([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('add(%i, %i) -> %i', ([a, b, expected]) => { // [!code ++]
  test('test', () => {
    expect(a + b).toBe(expected)
  })
})
ts
import { beforeEach } from 'vitest'

beforeEach(async () => {
  // Clear mocks and add some testing data before each test run
  await stopMocking()
  await addUser({ name: 'John' })
})
ts
import { beforeEach } from 'vitest'

beforeEach(async () => {
  // called once before each test run
  await prepareSomething()

// clean up function, called once after each test run
  return async () => {
    await resetSomething()
  }
})
ts
import { afterEach } from 'vitest'

afterEach(async () => {
  await clearTestingData() // clear testing data after each test run
})
ts
import { beforeAll } from 'vitest'

beforeAll(async () => {
  await startMocking() // called once before all tests run
})
ts
import { beforeAll } from 'vitest'

beforeAll(async () => {
  // called once before all tests run
  await startMocking()

// clean up function, called once after all tests run
  return async () => {
    await stopMocking()
  }
})
ts
import { afterAll } from 'vitest'

afterAll(async () => {
  await stopMocking() // this method is called after all tests run
})
ts {1,5}
import { onTestFinished, test } from 'vitest'

test('performs a query', () => {
  const db = connectDb()
  onTestFinished(() => db.close())
  db.query('SELECT * FROM users')
})
ts {3,5}
import { test } from 'vitest'

test.concurrent('performs a query', ({ onTestFinished }) => {
  const db = connectDb()
  onTestFinished(() => db.close())
  db.query('SELECT * FROM users')
})
ts
// this can be in a separate file
function getTestDb() {
  const db = connectMockedDb()
  onTestFinished(() => db.close())
  return db
}

test('performs a user query', async () => {
  const db = getTestDb()
  expect(
    await db.query('SELECT * from users').perform()
  ).toEqual([])
})

test('performs an organization query', async () => {
  const db = getTestDb()
  expect(
    await db.query('SELECT * from organizations').perform()
  ).toEqual([])
})
ts {1,5-7}
import { onTestFailed, test } from 'vitest'

test('performs a query', () => {
  const db = connectDb()
  onTestFailed(({ task }) => {
    console.log(task.result.errors)
  })
  db.query('SELECT * FROM users')
})
ts {3,5-7}
import { test } from 'vitest'

test.concurrent('performs a query', ({ onTestFailed }) => {
  const db = connectDb()
  onTestFailed(({ task }) => {
    console.log(task.result.errors)
  })
  db.query('SELECT * FROM users')
})
```

---
url: /guide/test-context.md
---

**Examples:**

Example 1 (unknown):
```unknown
### describe.concurrent

* **Alias:** `suite.concurrent`

`describe.concurrent` runs all inner suites and tests in parallel
```

Example 2 (unknown):
```unknown
`.skip`, `.only`, and `.todo` works with concurrent suites. All the following combinations are valid:
```

Example 3 (unknown):
```unknown
When running concurrent tests, Snapshots and Assertions must use `expect` from the local [Test Context](/guide/test-context) to ensure the right test is detected.
```

Example 4 (unknown):
```unknown
::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

### describe.sequential

* **Alias:** `suite.sequential`

`describe.sequential` in a suite marks every test as sequential. This is useful if you want to run tests in sequence within `describe.concurrent` or with the `--sequence.concurrent` command option.
```

---

## Vitest

**URL:** llms-txt#vitest

**Contents:**
- mode
  - test
  - benchmark experimental
- config
- vite
- state experimental
- snapshot
- cache
- watcher 4.0.0 {#watcher}
- projects

Vitest instance requires the current test mode. It can be either:

* `test` when running runtime tests
* `benchmark` when running benchmarks experimental

::: details New in Vitest 4
Vitest 4 added several new APIs (they are marked with a "4.0.0+" badge) and removed deprecated APIs:

* `invalidates`
* `changedTests` (use [`onFilterWatchedSpecification`](#onfilterwatchedspecification) instead)
* `server` (use [`vite`](#vite) instead)
* `getProjectsByTestFile` (use [`getModuleSpecifications`](#getmodulespecifications) instead)
* `getFileWorkspaceSpecs` (use [`getModuleSpecifications`](#getmodulespecifications) instead)
* `getModuleProjects` (filter by [`this.projects`](#projects) yourself)
* `updateLastChanged` (renamed to [`invalidateFile`](#invalidatefile))
* `globTestSpecs` (use [`globTestSpecifications`](#globtestspecifications) instead)
* `globTestFiles` (use [`globTestSpecifications`](#globtestspecifications) instead)
* `listFile` (use [`getRelevantTestSpecifications`](#getrelevanttestspecifications) instead)
  :::

Test mode will only call functions inside `test` or `it`, and throws an error when `bench` is encountered. This mode uses `include` and `exclude` options in the config to find test files.

### benchmark experimental

Benchmark mode calls `bench` functions and throws an error, when it encounters `test` or `it`. This mode uses `benchmark.include` and `benchmark.exclude` options in the config to find benchmark files.

The root (or global) config. If projects are defined, they will reference this as `globalConfig`.

::: warning
This is Vitest config, it doesn't extend *Vite* config. It only has resolved values from the `test` property.
:::

This is a global [`ViteDevServer`](https://vite.dev/guide/api-javascript#vitedevserver).

## state experimental

::: warning
Public `state` is an experimental API (except `vitest.state.getReportedEntity`). Breaking changes might not follow SemVer, please pin Vitest's version when using it.
:::

Global state stores information about the current tests. It uses the same API from `@vitest/runner` by default, but we recommend using the [Reported Tasks API](/advanced/reporters#reported-tasks) instead by calling `state.getReportedEntity()` on the `@vitest/runner` API:

In the future, the old API won't be exposed anymore.

The global snapshot manager. Vitest keeps track of all snapshots using the `snapshot.add` method.

You can get the latest summary of snapshots via the `vitest.snapshot.summary` property.

Cache manager that stores information about latest test results and test file stats. In Vitest itself this is only used by the default sequencer to sort tests.

## watcher 4.0.0 {#watcher}

The instance of a Vitest watcher with useful methods to track file changes and rerun tests. You can use `onFileChange`, `onFileDelete` or `onFileCreate` with your own watcher, if the built-in watcher is disabled.

An array of [test projects](/advanced/api/test-project) that belong to user's projects. If the user did not specify a them, this array will only contain a [root project](#getrootproject).

Vitest will ensure that there is always at least one project in this array. If the user specifies a non-existent `--project` name, Vitest will throw an error before this array is defined.

This returns the root test project. The root project generally doesn't run any tests and is not included in `vitest.projects` unless the user explicitly includes the root config in their configuration, or projects are not defined at all.

The primary goal of the root project is to setup the global config. In fact, `rootProject.config` references `rootProject.globalConfig` and `vitest.config` directly:

Vitest exposes `provide` method which is a shorthand for `vitest.getRootProject().provide`. With this method you can pass down values from the main thread to tests. All values are checked with `structuredClone` before they are stored, but the values themselves are not cloned.

To receive the values in the test, you need to import `inject` method from `vitest` entrypoint:

For better type safety, we encourage you to augment the type of `ProvidedContext`:

::: warning
Technically, `provide` is a method of [`TestProject`](/advanced/api/test-project), so it is limited to the specific project. However, all projects inherit the values from the root project which makes `vitest.provide` universal way of passing down values to tests.
:::

## getProvidedContext

This returns the root context object. This is a shorthand for `vitest.getRootProject().getProvidedContext`.

This method returns the project by its name. Similar to calling `vitest.projects.find`.

::: warning
In case the project doesn't exist, this method will return the root project - make sure to check the names again if the project you are looking for is the one returned.

If user didn't customize a name, the Vitest will assign an empty string as a name.
:::

## globTestSpecifications

This method constructs new [test specifications](/advanced/api/test-specification) by collecting every test in all projects with [`project.globTestFiles`](/advanced/api/test-project#globtestfiles). It accepts string filters to match the test files - these are the same filters that [CLI supports](/guide/filtering#cli).

This method automatically caches all test specifications. When you call [`getModuleSpecifications`](#getmodulespecifications) next time, it will return the same specifications unless [`clearSpecificationsCache`](#clearspecificationscache) was called before that.

::: warning
As of Vitest 3, it's possible to have multiple test specifications with the same module ID (file path) if `poolMatchGlob` has several pools or if `typecheck` is enabled. This possibility will be removed in Vitest 4.
:::

## getRelevantTestSpecifications

This method resolves every test specification by calling [`project.globTestFiles`](/advanced/api/test-project#globtestfiles). It accepts string filters to match the test files - these are the same filters that [CLI supports](/guide/filtering#cli). If `--changed` flag was specified, the list will be filtered to include only files that changed. `getRelevantTestSpecifications` doesn't run any test files.

::: warning
This method can be slow because it needs to filter `--changed` flags. Do not use it if you just need a list of test files.

* If you need to get the list of specifications for known test files, use [`getModuleSpecifications`](#getmodulespecifications) instead.
* If you need to get the list of all possible test files, use [`globTestSpecifications`](#globtestspecifications).
  :::

Merge reports from multiple runs located in the specified directory (value from `--merge-reports` if not specified). This value can also be set on `config.mergeReports` (by default, it will read `.vitest-reports` folder).

Note that the `directory` will always be resolved relative to the working directory.

This method is called automatically by [`startVitest`](/advanced/guide/tests) if `config.mergeReports` is set.

Execute test files without running test callbacks. `collect` returns unhandled errors and an array of [test modules](/advanced/api/test-module). It accepts string filters to match the test files - these are the same filters that [CLI supports](/guide/filtering#cli).

This method resolves tests specifications based on the config `include`, `exclude`, and `includeSource` values. Read more at [`project.globTestFiles`](/advanced/api/test-project#globtestfiles). If `--changed` flag was specified, the list will be filtered to include only files that changed.

::: warning
Note that Vitest doesn't use static analysis to collect tests. Vitest will run every test file in isolation, just like it runs regular tests.

This makes this method very slow, unless you disable isolation before collecting tests.
:::

Initialize reporters, the coverage provider, and run tests. This method accepts string filters to match the test files - these are the same filters that [CLI supports](/guide/filtering#cli).

::: warning
This method should not be called if [`vitest.init()`](#init) is also invoked. Use [`runTestSpecifications`](#runtestspecifications) or [`rerunTestSpecifications`](#reruntestspecifications) instead if you need to run tests after Vitest was initialised.
:::

This method is called automatically by [`startVitest`](/advanced/guide/tests) if `config.mergeReports` and `config.standalone` are not set.

Initialize reporters and the coverage provider. This method doesn't run any tests. If the `--watch` flag is provided, Vitest will still run changed tests even if this method was not called.

Internally, this method is called only if [`--standalone`](/guide/cli#standalone) flag is enabled.

::: warning
This method should not be called if [`vitest.start()`](#start) is also invoked.
:::

This method is called automatically by [`startVitest`](/advanced/guide/tests) if `config.standalone` is set.

## getModuleSpecifications

Returns a list of test specifications related to the module ID. The ID should already be resolved to an absolute file path. If ID doesn't match `include` or `includeSource` patterns, the returned array will be empty.

This method can return already cached specifications based on the `moduleId` and `pool`. But note that [`project.createSpecification`](/advanced/api/test-project#createspecification) always returns a new instance and it's not cached automatically. However, specifications are automatically cached when [`runTestSpecifications`](#runtestspecifications) is called.

::: warning
As of Vitest 3, this method uses a cache to check if the file is a test. To make sure that the cache is not empty, call [`globTestSpecifications`](#globtestspecifications) at least once.
:::

## clearSpecificationsCache

Vitest automatically caches test specifications for each file when [`globTestSpecifications`](#globtestspecifications) or [`runTestSpecifications`](#runtestspecifications) is called. This method clears the cache for the given file or the whole cache altogether depending on the first argument.

## runTestSpecifications

This method runs every test based on the received [specifications](/advanced/api/test-specification). The second argument, `allTestsRun`, is used by the coverage provider to determine if it needs to include uncovered files in report.

::: warning
This method doesn't trigger `onWatcherRerun`, `onWatcherStart` and `onTestsRerun` callbacks. If you are rerunning tests based on the file change, consider using [`rerunTestSpecifications`](#reruntestspecifications) instead.
:::

## rerunTestSpecifications

This method emits `reporter.onWatcherRerun` and `onTestsRerun` events, then it runs tests with [`runTestSpecifications`](#runtestspecifications). If there were no errors in the main process, it will emit `reporter.onWatcherStart` event.

Update snapshots in specified files. If no files are provided, it will update files with failed tests and obsolete snapshots.

Execute test files without running test callbacks. `collectTests` returns unhandled errors and an array of [test modules](/advanced/api/test-module).

This method works exactly the same as [`collect`](#collect), but you need to provide test specifications yourself.

::: warning
Note that Vitest doesn't use static analysis to collect tests. Vitest will run every test file in isolation, just like it runs regular tests.

This makes this method very slow, unless you disable isolation before collecting tests.
:::

This method will gracefully cancel all ongoing tests. It will wait for started tests to finish running and will not run tests that were scheduled to run but haven't started yet.

## setGlobalTestNamePattern

This methods overrides the global [test name pattern](/config/#testnamepattern).

::: warning
This method doesn't start running any tests. To run tests with updated pattern, call [`runTestSpecifications`](#runtestspecifications).
:::

## getGlobalTestNamePattern 4.0.0 {#getglobaltestnamepattern}

Returns the regexp used for the global test name pattern.

## resetGlobalTestNamePattern

This methods resets the [test name pattern](/config/#testnamepattern). It means Vitest won't skip any tests now.

::: warning
This method doesn't start running any tests. To run tests without a pattern, call [`runTestSpecifications`](#runtestspecifications).
:::

## enableSnapshotUpdate

Enable the mode that allows updating snapshots when running tests. Every test that runs after this method is called will update snapshots. To disable the mode, call [`resetSnapshotUpdate`](#resetsnapshotupdate).

::: warning
This method doesn't start running any tests. To update snapshots, run tests with [`runTestSpecifications`](#runtestspecifications).
:::

## resetSnapshotUpdate

Disable the mode that allows updating snapshots when running tests. This method doesn't start running any tests.

This method invalidates the file in the cache of every project. It is mostly useful if you rely on your own watcher because Vite's cache persist in memory.

::: danger
If you disable Vitest's watcher but keep Vitest running, it is important to manually clear the cache with this method because there is no way to disable the cache. This method will also invalidate file's importers.
:::

Import a file using Vite module runner. The file will be transformed by Vite with the global config and executed in a separate context. Note that `moduleId` will be relative to the `config.root`.

::: danger
`project.import` reuses Vite's module graph, so importing the same module using a regular import will return a different module:

::: info
Internally, Vitest uses this method to import global setups, custom coverage providers, and custom reporters, meaning all of them share the same module graph as long as they belong to the same Vite server.
:::

Closes all projects and their associated resources. This can only be called once; the closing promise is cached until the server restarts.

Closes all projects and exit the process. If `force` is set to `true`, the process will exit immediately after closing the projects.

This method will also forcefully call `process.exit()` if the process is still active after [`config.teardownTimeout`](/config/#teardowntimeout) milliseconds.

This method will return `true` if the server should be kept running after the tests are done. This usually means that the `watch` mode was enabled.

Register a handler that will be called when the server is restarted due to a config change.

Register a handler that will be called when the test run is cancelled with [`vitest.cancelCurrentRun`](#cancelcurrentrun).

Register a handler that will be called when the server is closed.

Register a handler that will be called when the tests are rerunning. The tests can rerun when [`rerunTestSpecifications`](#reruntestspecifications) is called manually or when a file is changed and the built-in watcher schedules a rerun.

## onFilterWatchedSpecification

Register a handler that will be called when a file is changed. This callback should return `true` or `false`, indicating whether the test file needs to be rerun.

With this method, you can hook into the default watcher logic to delay or discard tests that the user doesn't want to keep track of at the moment:

Vitest can create different specifications for the same file depending on the `pool` or `locations` options, so do not rely on the reference. Vitest can also return cached specification from [`vitest.getModuleSpecifications`](#getmodulespecifications) - the cache is based on the `moduleId` and `pool`. Note that [`project.createSpecification`](/advanced/api/test-project#createspecification) always returns a new instance.

## matchesProjectFilter 3.1.0 {#matchesprojectfilter}

Check if the name matches the current [project filter](/guide/cli#project). If there is no project filter, this will always return `true`.

It is not possible to programmatically change the `--project` CLI option.

## waitForTestRunEnd 4.0.0 {#waitfortestrunend}

If there is a test run happening, returns a promise that will resolve when the test run is finished.

## createCoverageProvider 4.0.0 {#createcoverageprovider}

Creates a coverage provider if `coverage` is enabled in the config. This is done automatically if you are running tests with [`start`](#start) or [`init`](#init) methods.

::: warning
This method will also clean all previous reports if [`coverage.clean`](/config/#coverage-clean) is not set to `false`.
:::

## enableCoverage 4.0.0 {#enablecoverage}

This method enables coverage for tests that run after this call. `enableCoverage` doesn't run any tests; it only sets up Vitest to collect coverage.

It creates a new coverage provider if one doesn't already exist.

## disableCoverage 4.0.0 {#disablecoverage}

This method disables coverage collection for tests that run afterwards.

## getSeed 4.0.0 {#getseed}

Returns the seed, if tests are running in a random order.

## experimental\_parseSpecification 4.0.0 experimental {#parsespecification}

This function will collect all tests inside the file without running it. It uses rollup's `parseAst` function on top of Vite's `ssrTransform` to statically analyse the file and collect all tests that it can.

::: warning
If Vitest could not analyse the name of the test, it will inject a `dynamic: true` property to the test or a suite. The `id` will also have a postfix with `-dynamic` to not break tests that were collected properly.

Vitest always injects this property in tests with `for` or `each` modifier or tests with a dynamic name (like, `hello ${property}` or `'hello' + ${property}`). Vitest will still assign a name to the test, but it cannot be used to filter tests.

There is nothing Vitest can do to make it possible to filter dynamic tests, but you can turn a test with `for` or `each` modifier into a name pattern with `escapeTestName` function:

::: warning
Vitest will only collect tests defined in the file. It will never follow imports to other files.

Vitest collects all `it`, `test`, `suite` and `describe` definitions even if they were not imported from the `vitest` entry point.
:::

## experimental\_parseSpecifications 4.0.0 experimental {#parsespecifications}

This method will [collect tests](#parsespecification) from an array of specifications. By default, Vitest will run only `os.availableParallelism()` number of specifications at a time to reduce the potential performance degradation. You can specify a different number in a second argument.

---
url: /guide/ui.md
---

**Examples:**

Example 1 (ts):
```ts
const task = vitest.state.idMap.get(taskId) // old API
const testCase = vitest.state.getReportedEntity(task) // new API
```

Example 2 (ts):
```ts
function getRootProject(): TestProject
```

Example 3 (ts):
```ts
rootProject.config === rootProject.globalConfig === rootProject.vitest.config
```

Example 4 (ts):
```ts
function provide<T extends keyof ProvidedContext & string>(
  key: T,
  value: ProvidedContext[T],
): void
```

---

## Comparisons with Other Test Runners

**URL:** llms-txt#comparisons-with-other-test-runners

**Contents:**
- Jest
- Cypress
- WebdriverIO
- Web Test Runner
- uvu
- Mocha

[Jest](https://jestjs.io/) took over the Testing Framework space by providing out-of-the-box support for most JavaScript projects, a comfortable API (`it` and `expect`), and the full pack of testing features that most setups would require (snapshots, mocks, coverage). We are thankful to the Jest team and community for creating a delightful testing API and pushing forward a lot of the testing patterns that are now a standard in the web ecosystem.

It is possible to use Jest in Vite setups. [@sodatea](https://bsky.app/profile/haoqun.dev) built [vite-jest](https://github.com/sodatea/vite-jest#readme), which aims to provide first-class Vite integration for [Jest](https://jestjs.io/). The last [blockers in Jest](https://github.com/sodatea/vite-jest/blob/main/packages/vite-jest/README.md#vite-jest) have been solved, so this is a valid option for your unit tests.

However, in a world where we have [Vite](https://vitejs.dev) providing support for the most common web tooling (TypeScript, JSX, most popular UI Frameworks), Jest represents a duplication of complexity. If your app is powered by Vite, having two different pipelines to configure and maintain is not justifiable. With Vitest you get to define the configuration for your dev, build and test environments as a single pipeline, sharing the same plugins and the same vite.config.js.

Even if your library is not using Vite (for example, if it is built with esbuild or Rollup), Vitest is an interesting option as it gives you a faster run for your unit tests and a jump in DX thanks to the default watch mode using Vite instant Hot Module Reload (HMR). Vitest offers compatibility with most of the Jest API and ecosystem libraries, so in most projects, it should be a drop-in replacement for Jest.

[Cypress](https://www.cypress.io/) is a browser-based test runner and a complementary tool to Vitest. If you'd like to use Cypress, we suggest using Vitest for all headless logic in your application and Cypress for all browser-based logic.

Cypress is known as an end-to-end testing tool, but their [new component test runner](https://on.cypress.io/component) has great support for testing Vite components and is an ideal choice to test anything that renders in a browser.

Browser-based runners, like Cypress, WebdriverIO and Web Test Runner, will catch issues that Vitest cannot because they use the real browser and real browser APIs.

Cypress's test driver is focused on determining if elements are visible, accessible, and interactive. Cypress is purpose-built for UI development and testing and its DX is centered around test driving your visual components. You see your component rendered alongside the test reporter. Once the test is complete, the component remains interactive and you can debug any failures that occur using your browser devtools.

In contrast, Vitest is focused on delivering the best DX possible for lightning fast, *headless* testing. Node-based runners like Vitest support various partially-implemented browser environments, like `jsdom`, which implement enough for you to quickly unit test any code that references browser APIs. The tradeoff is that these browser environments have limitations in what they can implement. For example, [jsdom is missing a number of features](https://github.com/jsdom/jsdom/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-desc) like `window.navigation` or a layout engine (`offsetTop`, etc).

Lastly, in contrast to the Web Test Runner, the Cypress test runner is more like an IDE than a test runner because you also see the real rendered component in the browser, along with its test results and logs.

Cypress has also been [integrating Vite in their products](https://www.youtube.com/watch?v=7S5cbY8iYLk): re-building their App's UI using [Vitesse](https://github.com/antfu/vitesse) and using Vite to test drive their project's development.

We believe that Cypress isn't a good option for unit testing headless code, but that using Cypress (for E2E and Component Testing) and Vitest (for unit tests) would cover your app's testing needs.

[WebdriverIO](https://webdriver.io/) is, similar to Cypress, a browser-based alternative test runner and a complementary tool to Vitest. It can be used as an end-to-end testing tool as well as for testing [web components](https://webdriver.io/docs/component-testing). It even uses components of Vitest under the hood, e.g. for [mocking and stubbing](https://webdriver.io/docs/mocksandspies/) within component tests.

WebdriverIO comes with the same advantages as Cypress allowing you to test your logic in real browser. However, it uses actual [web standards](https://w3c.github.io/webdriver/) for automation, which overcomes some of the tradeoffs and limitation when running tests in Cypress. Furthermore, it allows you to run tests on mobile as well, giving you access to test your application in even more environments.

[@web/test-runner](https://modern-web.dev/docs/test-runner/overview/) runs tests inside a headless browser, providing the same execution environment as your web application without the need for mocking out browser APIs or the DOM. This also makes it possible to debug inside a real browser using the devtools, although there is no UI shown for stepping through the test, as there is in Cypress tests.

To use @web/test-runner with a Vite project, use [@remcovaes/web-test-runner-vite-plugin](https://github.com/remcovaes/web-test-runner-vite-plugin). @web/test-runner does not include assertion or mocking libraries, so it is up to you to add them.

[uvu](https://github.com/lukeed/uvu) is a test runner for Node.js and the browser. It runs tests in a single thread, so tests are not isolated and can leak across files. Vitest, however, uses worker threads to isolate tests and run them in parallel.

For transforming your code, uvu relies on require and loader hooks. Vitest uses [Vite](https://vitejs.dev), so files are transformed with the full power of Vite's plugin system. In a world where we have Vite providing support for the most common web tooling (TypeScript, JSX, most popular UI Frameworks), uvu represents a duplication of complexity. If your app is powered by Vite, having two different pipelines to configure and maintain is not justifiable. With Vitest you get to define the configuration for your dev, build and test environments as a single pipeline, sharing the same plugins and the same configuration.

uvu does not provide an intelligent watch mode to rerun the changed tests, while Vitest gives you amazing DX thanks to the default watch mode using Vite instant Hot Module Reload (HMR).

uvu is a fast option for running simple tests, but Vitest can be faster and more reliable for more complex tests and projects.

[Mocha](https://mochajs.org) is a test framework running on Node.js and in the browser. Mocha is a popular choice for server-side testing. Mocha is highly configurable and does not include certain features by default. For example, it does not come with an assertion library, with the idea being that Node's built-in assertion runner is good enough for most use cases. Another popular choice for assertions with Mocha is [Chai](https://www.chaijs.com).

Vitest also provides out-of-the-box setup for a few other features, which take additional configuration or the addition of other libraries in Mocha, for example:

* Snapshot testing
* TypeScript
* JSX support
* Code Coverage
* Mocking
* Smart watch mode (only re-runs affected tests)

While Mocha supports Native ESM, it has limitations and configuration constraints. Watch mode does not work with ES Module files, for example.

Performance-wise, Mocha runs tests serially by default but supports parallel execution with the `--parallel` flag (though some reporters and features don't work in parallel mode).

If you're already using Vite in your build pipeline, Vitest allows you to reuse the same configuration and plugins for testing, whereas Mocha would require a separate test setup. Vitest provides a Jest-compatible API while also supporting Mocha's familiar `describe`, `it`, and hook syntax, making migration straightforward for most test suites.

Mocha remains a solid choice for projects that need a minimal, flexible test runner with complete control over their testing stack. However, if you want a modern testing experience with everything included out of the box - especially for Vite-powered applications - Vitest has you covered.

---
url: /guide/browser/component-testing.md
---

---

## Test Filtering

**URL:** llms-txt#test-filtering

**Contents:**
- CLI
- Specifying a Timeout
- Skipping Suites and Tests
- Selecting Suites and Tests to Run
- Unimplemented Suites and Tests

Filtering, timeouts, concurrent for suite and tests

You can use CLI to filter test files by name:

Will only execute test files that contain `basic`, e.g.

You can also use the `-t, --testNamePattern <pattern>` option to filter tests by full name. This can be helpful when you want to filter by the name defined within a file rather than the filename itself.

Since Vitest 3, you can also specify the test by filename and line number:

::: warning
Note that Vitest requires the full filename for this feature to work. It can be relative to the current working directory or an absolute file path.

At the moment Vitest also doesn't support ranges:

## Specifying a Timeout

You can optionally pass a timeout in milliseconds as a third argument to tests. The default is [5 seconds](/config/#testtimeout).

Hooks also can receive a timeout, with the same 5 seconds default.

## Skipping Suites and Tests

Use `.skip` to avoid running certain suites or tests

## Selecting Suites and Tests to Run

Use `.only` to only run certain suites or tests

## Unimplemented Suites and Tests

Use `.todo` to stub suites and tests that should be implemented

---
url: /guide/projects.md
---

**Examples:**

Example 1 (bash):
```bash
$ vitest basic
```

Example 2 (unknown):
```unknown
basic.test.ts
basic-foo.test.ts
basic/foo.test.ts
```

Example 3 (bash):
```bash
$ vitest basic/foo.test.ts:10
```

Example 4 (bash):
```bash
$ vitest basic/foo.js:10 # ✅
$ vitest ./basic/foo.js:10 # ✅
$ vitest /users/project/basic/foo.js:10 # ✅
$ vitest foo:10 # ❌
$ vitest ./basic/foo:10 # ❌
```

---

## NodeJS arguments                                           Vitest arguments

**URL:** llms-txt#nodejs-arguments-------------------------------------------vitest-arguments

**Contents:**
- File transform
- Code coverage
- Inspecting profiling records

[File tree]
├── src
│   └── utils
│       ├── currency.ts
│       ├── formatters.ts  <-- File to test
│       ├── index.ts
│       ├── location.ts
│       ├── math.ts
│       ├── time.ts
│       └── users.ts
├── test
│   └── formatters.test.ts
└── vitest.config.ts
ts [example.test.ts]
import { expect, test } from 'vitest'
import { formatter } from '../src/utils' // [!code --]
import { formatter } from '../src/utils/formatters' // [!code ++]

test('formatter works', () => {
  expect(formatter).not.toThrow()
})
bash
$ VITEST_DEBUG_DUMP=true vitest --run

RUN  v2.1.1 /x/vitest/examples/profiling
...

$ ls .vitest-dump/
_x_examples_profiling_global-setup_ts-1292904907.js
_x_examples_profiling_test_prime-number_test_ts-1413378098.js
_src_prime-number_ts-525172412.js
bash
$ DEBUG=vitest:coverage vitest --run --coverage

RUN  v3.1.1 /x/vitest-example

vitest:coverage Reading coverage results 2/2
  vitest:coverage Converting 1/2
  vitest:coverage 4 ms /x/src/multiply.ts
  vitest:coverage Converting 2/2
  vitest:coverage 552 ms /x/src/add.ts
  vitest:coverage Uncovered files 1/2
  vitest:coverage File "/x/src/large-file.ts" is taking longer than 3s # [!code error]
  vitest:coverage 3027 ms /x/src/large-file.ts
  vitest:coverage Uncovered files 2/2
  vitest:coverage 4 ms /x/src/untested-file.ts
  vitest:coverage Generate coverage total time 3521 ms
```

This profiling approach is great for detecting large files that are accidentally picked by coverage providers.
For example if your configuration is accidentally including large built minified Javascript files in code coverage, they should appear in logs.
In these cases you might want to adjust your [`coverage.include`](/config/#coverage-include) and [`coverage.exclude`](/config/#coverage-exclude) options.

## Inspecting profiling records

You can inspect the contents of `*.cpuprofile` and `*.heapprofile` with various tools. See list below for examples.

* [Speedscope](https://www.speedscope.app/)
* [Performance Profiling JavaScript in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/profiling#_analyzing-a-profile)
* [Profile Node.js performance with the Performance panel | developer.chrome.com](https://developer.chrome.com/docs/devtools/performance/nodejs#analyze)
* [Memory panel overview | developer.chrome.com](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots#view_snapshots)

---
url: /guide/recipes.md
---

**Examples:**

Example 1 (unknown):
```unknown
After the tests have run there should be a `main-profile/*.cpuprofile` file generated. See [Inspecting profiling records](#inspecting-profiling-records) for instructions how to analyze these files.

## File transform

This profiling strategy is a good way to identify unnecessary transforms caused by [barrel files](https://vitejs.dev/guide/performance.html#avoid-barrel-files).
If these logs contain files that should not be loaded when your test is run, you might have barrel files that are importing files unnecessarily.

You can also use [Vitest UI](/guide/ui) to debug slowness caused by barrel file.
The example below shows how importing files without barrel file reduces amount of transformed files by ~85%.

::: code-group
```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown
:::

To see how files are transformed, you can use `VITEST_DEBUG_DUMP` environment variable to write transformed files in the file system:
```

Example 4 (unknown):
```unknown
## Code coverage

If code coverage generation is slow on your project you can use `DEBUG=vitest:coverage` environment variable to enable performance logging.
```

---

## Testing Types

**URL:** llms-txt#testing-types

**Contents:**
- Reading Errors
- Run Typechecking

::: tip Sample Project

[GitHub](https://github.com/vitest-dev/vitest/tree/main/examples/typecheck) - [Play Online](https://stackblitz.com/fork/github/vitest-dev/vitest/tree/main/examples/typecheck?initialPath=__vitest__/)

Vitest allows you to write tests for your types, using `expectTypeOf` or `assertType` syntaxes. By default all tests inside `*.test-d.ts` files are considered type tests, but you can change it with [`typecheck.include`](/config/#typecheck-include) config option.

Under the hood Vitest calls `tsc` or `vue-tsc`, depending on your config, and parses results. Vitest will also print out type errors in your source code, if it finds any. You can disable it with [`typecheck.ignoreSourceErrors`](/config/#typecheck-ignoresourceerrors) config option.

Keep in mind that Vitest doesn't run these files, they are only statically analyzed by the compiler. Meaning, that if you use a dynamic name or `test.each` or `test.for`, the test name will not be evaluated - it will be displayed as is.

::: warning
Before Vitest 2.1, your `typecheck.include` overrode the `include` pattern, so your runtime tests did not actually run; they were only type-checked.

Since Vitest 2.1, if your `include` and `typecheck.include` overlap, Vitest will report type tests and runtime tests as separate entries.
:::

Using CLI flags, like `--allowOnly` and `-t` are also supported for type checking.

Any type error triggered inside a test file will be treated as a test error, so you can use any type trick you want to test types of your project.

You can see a list of possible matchers in [API section](/api/expect-typeof).

If you are using `expectTypeOf` API, refer to the [expect-type documentation on its error messages](https://github.com/mmkal/expect-type#error-messages).

When types don't match, `.toEqualTypeOf` and `.toExtend` use a special helper type to produce error messages that are as actionable as possible. But there's a bit of an nuance to understanding them. Since the assertions are written "fluently", the failure should be on the "expected" type, not the "actual" type (`expect<Actual>().toEqualTypeOf<Expected>()`). This means that type errors can be a little confusing - so this library produces a `MismatchInfo` type to try to make explicit what the expectation is. For example:

Is an assertion that will fail, since `{a: 1}` has type `{a: number}` and not `{a: string}`.  The error message in this case will read something like this:

Note that the type constraint reported is a human-readable messaging specifying both the "expected" and "actual" types. Rather than taking the sentence `Types of property 'a' are incompatible // Type 'string' is not assignable to type "Expected: string, Actual: number"` literally - just look at the property name (`'a'`) and the message: `Expected: string, Actual: number`. This will tell you what's wrong, in most cases. Extremely complex types will of course be more effort to debug, and may require some experimentation. Please [raise an issue](https://github.com/mmkal/expect-type) if the error messages are actually misleading.

The `toBe...` methods (like `toBeString`, `toBeNumber`, `toBeVoid` etc.) fail by resolving to a non-callable type when the `Actual` type under test doesn't match up. For example, the failure for an assertion like `expectTypeOf(1).toBeString()` will look something like this:

The `This expression is not callable` part isn't all that helpful - the meaningful error is the next line, `Type 'ExpectString<number> has no call signatures`. This essentially means you passed a number but asserted it should be a string.

If TypeScript added support for ["throw" types](https://github.com/microsoft/TypeScript/pull/40468) these error messages could be improved significantly. Until then they will take a certain amount of squinting.

#### Concrete "expected" objects vs typeargs

Error messages for an assertion like this:

Will be less helpful than for an assertion like this:

This is because the TypeScript compiler needs to infer the typearg for the `.toEqualTypeOf({a: ''})` style, and this library can only mark it as a failure by comparing it against a generic `Mismatch` type. So, where possible, use a typearg rather than a concrete type for `.toEqualTypeOf` and `.toExtend`. If it's much more convenient to compare two concrete types, you can use `typeof`:

If you find it hard working with `expectTypeOf` API and figuring out errors, you can always use more simple `assertType` API:

::: tip
When using `@ts-expect-error` syntax, you might want to make sure that you didn't make a typo. You can do that by including your type files in [`test.include`](/config/#include) config option, so Vitest will also actually *run* these tests and fail with `ReferenceError`.

This will pass, because it expects an error, but the word “answer” has a typo, so it's a false positive error:

To enable typechecking, just add [`--typecheck`](/config/#typecheck) flag to your Vitest command in `package.json`:

Now you can run typecheck:

Vitest uses `tsc --noEmit` or `vue-tsc --noEmit`, depending on your configuration, so you can remove these scripts from your pipeline.

---
url: /advanced/api/test-module.md
---

**Examples:**

Example 1 (unknown):
```unknown
Any type error triggered inside a test file will be treated as a test error, so you can use any type trick you want to test types of your project.

You can see a list of possible matchers in [API section](/api/expect-typeof).

## Reading Errors

If you are using `expectTypeOf` API, refer to the [expect-type documentation on its error messages](https://github.com/mmkal/expect-type#error-messages).

When types don't match, `.toEqualTypeOf` and `.toExtend` use a special helper type to produce error messages that are as actionable as possible. But there's a bit of an nuance to understanding them. Since the assertions are written "fluently", the failure should be on the "expected" type, not the "actual" type (`expect<Actual>().toEqualTypeOf<Expected>()`). This means that type errors can be a little confusing - so this library produces a `MismatchInfo` type to try to make explicit what the expectation is. For example:
```

Example 2 (unknown):
```unknown
Is an assertion that will fail, since `{a: 1}` has type `{a: number}` and not `{a: string}`.  The error message in this case will read something like this:
```

Example 3 (unknown):
```unknown
Note that the type constraint reported is a human-readable messaging specifying both the "expected" and "actual" types. Rather than taking the sentence `Types of property 'a' are incompatible // Type 'string' is not assignable to type "Expected: string, Actual: number"` literally - just look at the property name (`'a'`) and the message: `Expected: string, Actual: number`. This will tell you what's wrong, in most cases. Extremely complex types will of course be more effort to debug, and may require some experimentation. Please [raise an issue](https://github.com/mmkal/expect-type) if the error messages are actually misleading.

The `toBe...` methods (like `toBeString`, `toBeNumber`, `toBeVoid` etc.) fail by resolving to a non-callable type when the `Actual` type under test doesn't match up. For example, the failure for an assertion like `expectTypeOf(1).toBeString()` will look something like this:
```

Example 4 (unknown):
```unknown
The `This expression is not callable` part isn't all that helpful - the meaningful error is the next line, `Type 'ExpectString<number> has no call signatures`. This essentially means you passed a number but asserted it should be a string.

If TypeScript added support for ["throw" types](https://github.com/microsoft/TypeScript/pull/40468) these error messages could be improved significantly. Until then they will take a certain amount of squinting.

#### Concrete "expected" objects vs typeargs

Error messages for an assertion like this:
```

---

## TestSuite

**URL:** llms-txt#testsuite

**Contents:**
- project
- module
- name
- fullName
- id
- location
- parent
- options
- children
- ok

The `TestSuite` class represents a single suite. This class is only available in the main thread. Refer to the ["Runner API"](/advanced/runner#tasks) if you are working with runtime tasks.

The `TestSuite` instance always has a `type` property with the value of `suite`. You can use it to distinguish between different task types:

This references the [`TestProject`](/advanced/api/test-project) that the test belongs to.

This is a direct reference to the [`TestModule`](/advanced/api/test-module) where the test is defined.

This is a suite name that was passed to the `describe` function.

The name of the suite including all parent suites separated with `>` symbol. This suite has a full name "the validation logic > validating cities":

This is suite's unique identifier. This ID is deterministic and will be the same for the same suite across multiple runs. The ID is based on the [project](/advanced/api/test-project) name, module ID and suite order.

The ID looks like this:

::: tip
You can generate file hash with `generateFileHash` function from `vitest/node` which is available since Vitest 3:

::: danger
Don't try to parse the ID. It can have a minus at the start: `-1223128da3_0_0_0`.
:::

The location in the module where the suite was defined. Locations are collected only if [`includeTaskLocation`](/config/#includetasklocation) is enabled in the config. Note that this option is automatically enabled if `--reporter=html`, `--ui` or `--browser` flags are used.

The location of this suite will be equal to `{ line: 3, column: 1 }`:

Parent suite. If the suite was called directly inside the [module](/advanced/api/test-module), the parent will be the module itself.

The options that suite was collected with.

This is a [collection](/advanced/api/test-collection) of all suites and tests inside the current suite.

::: warning
Note that `suite.children` will only iterate the first level of nesting, it won't go deeper. If you need to iterate over all tests or suites, use [`children.allTests()`](/advanced/api/test-collection#alltests) or [`children.allSuites()`](/advanced/api/test-collection#allsuites). If you need to iterate over everything, use recursive function:

Checks if the suite has any failed tests. This will also return `false` if suite failed during collection. In that case, check the [`errors()`](#errors) for thrown errors.

Checks the running state of the suite. Possible return values:

* **pending**: the tests in this suite did not finish running yet.
* **failed**: this suite has failed tests or they couldn't be collected. If [`errors()`](#errors) is not empty, it means the suite failed to collect tests.
* **passed**: every test inside this suite has passed.
* **skipped**: this suite was skipped during collection.

::: warning
Note that [test module](/advanced/api/test-module) also has a `state` method that returns the same values, but it can also return an additional `queued` state if the module wasn't executed yet.
:::

Errors that happened outside of the test run during collection, like syntax errors.

::: warning
Note that errors are serialized into simple objects: `instanceof Error` will always return `false`.
:::

## meta 3.1.0 {#meta}

Custom [metadata](/advanced/metadata) that was attached to the suite during its execution or collection. The meta can be attached by assigning a property to the `suite.meta` object during a test run:

:::tip
If metadata was attached during collection (outside of the `test` function), then it will be available in [`onTestModuleCollected`](./reporters#ontestmodulecollected) hook in the custom reporter.
:::

---
url: /guide/mocking/timers.md
---

**Examples:**

Example 1 (ts):
```ts
if (task.type === 'suite') {
  task // TestSuite
}
```

Example 2 (ts):
```ts
import { describe } from 'vitest'

// [!code word:'the validation logic']
describe('the validation logic', () => {
  // ...
})
```

Example 3 (ts):
```ts
import { describe, test } from 'vitest'

// [!code word:'the validation logic']
// [!code word:'validating cities']
describe('the validation logic', () => {
  describe('validating cities', () => {
    // ...
  })
})
```

Example 4 (unknown):
```unknown
1223128da3_0_0_0
^^^^^^^^^^ the file hash
           ^ suite index
             ^ nested suite index
               ^ test index
```

---

## Use VITEST_MAX_WORKERS:

**URL:** llms-txt#use-vitest_max_workers:

VITEST_MAX_WORKERS=7 vitest run --reporter=blob --shard=1/4 & \
VITEST_MAX_WORKERS=7 vitest run --reporter=blob --shard=2/4 & \
VITEST_MAX_WORKERS=7 vitest run --reporter=blob --shard=3/4 & \
VITEST_MAX_WORKERS=7 vitest run --reporter=blob --shard=4/4 & \
wait # https://man7.org/linux/man-pages/man2/waitpid.2.html

vitest run --merge-reports
```

---
url: /guide/in-source.md
---

---

## TestProject 3.0.0 {#testproject}

**URL:** llms-txt#testproject-3.0.0-{#testproject}

**Contents:**
- name
- vitest
- serializedConfig
- globalConfig
- config
- hash 3.2.0 {#hash}
- vite
- browser
- provide
- getProvidedContext

::: warning
This guide describes the advanced Node.js API. If you just want to define projects, follow the ["Test Projects"](/guide/projects) guide.
:::

The name is a unique string assigned by the user or interpreted by Vitest. If user did not provide a name, Vitest tries to load a `package.json` in the root of the project and takes the `name` property from there. If there is no `package.json`, Vitest uses the name of the folder by default. Inline projects use numbers as the name (converted to string).

::: info
If the [root project](/advanced/api/vitest#getroottestproject) is not part of user projects, its `name` will not be resolved.
:::

`vitest` references the global [`Vitest`](/advanced/api/vitest) process.

This is the config that test processes receive. Vitest [serializes config](https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/config/serializeConfig.ts) manually by removing all functions and properties that are not possible to serialize. Since this value is available in both tests and node, its type is exported from the main entry point.

::: warning
The `serializedConfig` property is a getter. Every time it's accessed Vitest serializes the config again in case it was changed. This also means that it always returns a different reference:

The test config that [`Vitest`](/advanced/api/vitest) was initialized with. If this is the [root project](/advanced/api/vitest#getroottestproject), `globalConfig` and `config` will reference the same object. This config is useful for values that cannot be set on the project level, like `coverage` or `reporters`.

This is the project's resolved test config.

## hash 3.2.0 {#hash}

The unique hash of this project. This value is consistent between the reruns.

It is based on the root of the project and its name. Note that the root path is not consistent between different OS, so the hash will also be different.

This is project's [`ViteDevServer`](https://vite.dev/guide/api-javascript#vitedevserver). All projects have their own Vite servers.

This value will be set only if tests are running in the browser. If `browser` is enabled, but tests didn't run yet, this will be `undefined`. If you need to check if the project supports browser tests, use `project.isBrowserEnabled()` method.

::: warning
The browser API is even more experimental and doesn't follow SemVer. The browser API will be standardized separately from the rest of the APIs.
:::

A way to provide custom values to tests in addition to [`config.provide`](/config/#provide) field. All values are validated with [`structuredClone`](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone) before they are stored, but the values on `providedContext` themselves are not cloned.

The values can be provided dynamically. Provided value in tests will be updated on their next run.

::: tip
This method is also available to [global setup files](/config/#globalsetup) for cases where you cannot use the public API:

## getProvidedContext

This returns the context object. Every project also inherits the global context set by `vitest.provide`.

::: tip
Project context values will always override root project's context.
:::

## createSpecification

Create a [test specification](/advanced/api/test-specification) that can be used in [`vitest.runTestSpecifications`](/advanced/api/vitest#runtestspecifications). Specification scopes the test file to a specific `project` and test `locations` (optional). Test [locations](/advanced/api/test-case#location) are code lines where the test is defined in the source code. If locations are provided, Vitest will only run tests defined on those lines. Note that if [`testNamePattern`](/config/#testnamepattern) is defined, then it will also be applied.

::: warning
`createSpecification` expects resolved [module ID](/advanced/api/test-specification#moduleid). It doesn't auto-resolve the file or check that it exists on the file system.

Also note that `project.createSpecification` always returns a new instance.
:::

Checks if the current project is the root project. You can also get the root project by calling [`vitest.getRootProject()`](#getrootproject).

Globs all test files. This function returns an object with regular tests and typecheck tests.

This method accepts `filters`. Filters can only a part of the file path, unlike in other methods on the [`Vitest`](/advanced/api/vitest) instance:

::: tip
Vitest uses [fast-glob](https://www.npmjs.com/package/fast-glob) to find test files. `test.dir`, `test.root`, `root` or `process.cwd()` define the `cwd` option.

This method looks at several config options:

* `test.include`, `test.exclude` to find regular test files
* `test.includeSource`, `test.exclude` to find in-source tests
* `test.typecheck.include`, `test.typecheck.exclude` to find typecheck tests
  :::

This method checks if the file is a regular test file. It uses the same config properties that `globTestFiles` uses for validation.

This method also accepts a second parameter, which is the source code. This is used to validate if the file is an in-source test. If you are calling this method several times for several projects it is recommended to read the file once and pass it down directly. If the file is not a test file, but matches the `includeSource` glob, Vitest will synchronously read the file unless the `source` is provided.

Import a file using Vite module runner. The file will be transformed by Vite with provided project's config and executed in a separate context. Note that `moduleId` will be relative to the `config.root`.

::: danger
`project.import` reuses Vite's module graph, so importing the same module using a regular import will return a different module:

::: info
Internally, Vitest uses this method to import global setups, custom coverage providers and custom reporters, meaning all of them share the same module graph as long as they belong to the same Vite server.
:::

This is a shorthand for [`project.vitest.onTestsRerun`](/advanced/api/vitest#ontestsrerun). It accepts a callback that will be awaited when the tests have been scheduled to rerun (usually, due to a file change).

Returns `true` if this project runs tests in the browser.

Closes the project and all associated resources. This can only be called once; the closing promise is cached until the server restarts. If the resources are needed again, create a new project.

In detail, this method closes the Vite server, stops the typechecker service, closes the browser if it's running, deletes the temporary directory that holds the source code, and resets the provided context.

---
url: /advanced/api/test-specification.md
---

**Examples:**

Example 1 (unknown):
```unknown

```

Example 2 (unknown):
```unknown
:::

::: info
If the [root project](/advanced/api/vitest#getroottestproject) is not part of user projects, its `name` will not be resolved.
:::

## vitest

`vitest` references the global [`Vitest`](/advanced/api/vitest) process.

## serializedConfig

This is the config that test processes receive. Vitest [serializes config](https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/config/serializeConfig.ts) manually by removing all functions and properties that are not possible to serialize. Since this value is available in both tests and node, its type is exported from the main entry point.
```

Example 3 (unknown):
```unknown
::: warning
The `serializedConfig` property is a getter. Every time it's accessed Vitest serializes the config again in case it was changed. This also means that it always returns a different reference:
```

Example 4 (unknown):
```unknown
:::

## globalConfig

The test config that [`Vitest`](/advanced/api/vitest) was initialized with. If this is the [root project](/advanced/api/vitest#getroottestproject), `globalConfig` and `config` will reference the same object. This config is useful for values that cannot be set on the project level, like `coverage` or `reporters`.
```

---

## Running Tests

**URL:** llms-txt#running-tests

**Contents:**
- `startVitest`
- `createVitest`

::: warning
This guide explains how to use the advanced API to run tests via a Node.js script. If you just want to [run tests](/guide/), you probably don't need this. It is primarily used by library authors.
:::

Vitest exposes two methods to initiate Vitest:

* `startVitest` initiates Vitest, validates the packages are installed and runs tests immediately
* `createVitest` only initiates Vitest and doesn't run any tests

::: tip
[`TestModule`](/advanced/api/test-module), [`TestSuite`](/advanced/api/test-suite) and [`TestCase`](/advanced/api/test-case) APIs are not experimental and follow SemVer since Vitest 2.1.
:::

Creates a [Vitest](/advanced/api/vitest) instances without running tests.

`createVitest` method doesn't validate that required packages are installed. It also doesn't respect `config.standalone` or `config.mergeReports`. Vitest won't be closed automatically even if `watch` is disabled.

If you intend to keep the `Vitest` instance, make sure to at least call [`init`](/advanced/api/vitest#init). This will initialise reporters and the coverage provider, but won't run any tests. It is also recommended to enable the `watch` mode even if you don't intend to use the Vitest watcher, but want to keep the instance running. Vitest relies on this flag for some of its features to work correctly in a continuous process.

After reporters are initialised, use [`runTestSpecifications`](/advanced/api/vitest#runtestspecifications) or [`rerunTestSpecifications`](/advanced/api/vitest#reruntestspecifications) to run tests if manual run is required:

::: warning
The example above shows a potential use-case if you disable the default watcher behaviour. By default, Vitest already reruns tests if files change.

Also note that `getModuleSpecifications` will not resolve test files unless they were already processed by `globTestSpecifications`. If the file was just created, use `project.matchesGlobPattern` instead:

In cases where you need to disable the watcher, you can pass down `server.watch: null` since Vite 5.3 or `server.watch: { ignored: ['*/*'] }` to a Vite config:

---
url: /guide/snapshot.md
---

**Examples:**

Example 1 (ts):
```ts
import { startVitest } from 'vitest/node'

const vitest = await startVitest(
  'test',
  [], // CLI filters
  {}, // override test config
  {}, // override Vite config
  {}, // custom Vitest options
)
const testModules = vitest.state.getTestModules()
for (const testModule of testModules) {
  console.log(testModule.moduleId, testModule.ok() ? 'passed' : 'failed')
}
```

Example 2 (ts):
```ts
import { createVitest } from 'vitest/node'

const vitest = await createVitest(
  'test',
  {}, // override test config
  {}, // override Vite config
  {}, // custom Vitest options
)

// called when `vitest.cancelCurrentRun()` is invoked
vitest.onCancel(() => {})
// called during `vitest.close()` call
vitest.onClose(() => {})
// called when Vitest reruns test files
vitest.onTestsRerun((files) => {})

try {
  // this will set process.exitCode to 1 if tests failed,
  // and won't close the process automatically
  await vitest.start(['my-filter'])
}
catch (err) {
  // this can throw
  // "FilesNotFoundError" if no files were found
  // "GitNotFoundError" with `--changed` and repository is not initialized
}
finally {
  await vitest.close()
}
```

Example 3 (ts):
```ts
watcher.on('change', async (file) => {
  const specifications = vitest.getModuleSpecifications(file)
  if (specifications.length) {
    vitest.invalidateFile(file)
    // you can use runTestSpecifications if "reporter.onWatcher*" hooks
    // should not be invoked
    await vitest.rerunTestSpecifications(specifications)
  }
})
```

Example 4 (ts):
```ts
watcher.on('add', async (file) => {
  const specifications = []
  for (const project of vitest.projects) {
    if (project.matchesGlobPattern(file)) {
      specifications.push(project.createSpecification(file))
    }
  }

  if (specifications.length) {
    await vitest.rerunTestSpecifications(specifications)
  }
})
```

---

## Test Context

**URL:** llms-txt#test-context

**Contents:**
- Usage
- Built-in Test Context
- Extend Test Context
  - `test.extend`

Inspired by [Playwright Fixtures](https://playwright.dev/docs/test-fixtures), Vitest's test context allows you to define utils, states, and fixtures that can be used in your tests.

The first argument for each test callback is a test context.

## Built-in Test Context

A readonly object containing metadata about the test.

The `expect` API bound to the current test:

This API is useful for running snapshot tests concurrently because global expect cannot track them:

Skips subsequent test execution and marks test as skipped:

Since Vitest 3.1, it accepts a boolean parameter to skip the test conditionally:

#### `annotate` 3.2.0 {#annotate}

Add a [test annotation](/guide/test-annotations) that will be displayed by your [reporter](/config/#reporters).

#### `signal` 3.2.0 {#signal}

An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that can be aborted by Vitest. The signal is aborted in these situations:

* Test times out
* User manually cancelled the test run with Ctrl+C
* [`vitest.cancelCurrentRun`](/advanced/api/vitest#cancelcurrentrun) was called programmatically
* Another test failed in parallel and the [`bail`](/config/#bail) flag is set

The [`onTestFailed`](/api/#ontestfailed) hook bound to the current test. This API is useful if you are running tests concurrently and need to have a special handling only for this specific test.

#### `onTestFinished`

The [`onTestFinished`](/api/#ontestfailed) hook bound to the current test. This API is useful if you are running tests concurrently and need to have a special handling only for this specific test.

## Extend Test Context

Vitest provides two different ways to help you extend the test context.

Like [Playwright](https://playwright.dev/docs/api/class-test#test-extend), you can use this method to define your own `test` API with custom fixtures and reuse it anywhere.

For example, we first create the `test` collector with two fixtures: `todos` and `archive`.

Then we can import and use it.

We can also add more fixtures or override existing fixtures by extending our `test`.

#### Fixture initialization

Vitest runner will smartly initialize your fixtures and inject them into the test context based on usage.

::: warning
When using `test.extend()` with fixtures, you should always use the object destructuring pattern `{ todos }` to access context both in fixture function and test function.

#### Automatic fixture

Vitest also supports the tuple syntax for fixtures, allowing you to pass options for each fixture. For example, you can use it to explicitly initialize a fixture, even if it's not being used in tests.

Since Vitest 3, you can provide different values in different [projects](/guide/projects). To enable this feature, pass down `{ injected: true }` to the options. If the key is not specified in the [project configuration](/config/#provide), then the default value will be used.

#### Scoping Values to Suite 3.1.0 {#scoping-values-to-suite}

Since Vitest 3.1, you can override context values per suite and its children by using the `test.scoped` API:

This API is particularly useful if you have a context value that relies on a dynamic variable like a database connection:

#### Per-Scope Context 3.2.0

You can define context that will be initiated once per file or a worker. It is initiated the same way as a regular fixture with an objects parameter:

The value is initialised the first time any test has accessed it, unless the fixture options have `auto: true` - in this case the value is initialised before any test has run.

The `worker` scope will run the fixture once per worker. The number of running workers depends on various factors. By default, every file runs in a separate worker, so `file` and `worker` scopes work the same way.

However, if you disable [isolation](/config/#isolate), then the number of workers is limited by the [`maxWorkers`](/config/#maxworkers) configuration.

Note that specifying `scope: 'worker'` when running tests in `vmThreads` or `vmForks` will work the same way as `scope: 'file'`. This limitation exists because every test file has its own VM context, so if Vitest were to initiate it once, one context could leak to another and create many reference inconsistencies (instances of the same class would reference different constructors, for example).

To provide fixture types for all your custom contexts, you can pass the fixtures type as a generic.

::: info Type Inferring
Note that Vitest doesn't support infering the types when the `use` function is called. It is always preferable to pass down the whole context type as the generic type when `test.extend` is called:

When using `test.extend`, the extended `test` object provides type-safe `beforeEach` and `afterEach` hooks that are aware of the new context:

---
url: /guide/environment.md
---

**Examples:**

Example 1 (ts):
```ts
import { it } from 'vitest'

it('should work', ({ task }) => {
  // prints name of the test
  console.log(task.name)
})
```

Example 2 (ts):
```ts
import { it } from 'vitest'

it('math is easy', ({ expect }) => {
  expect(2 + 2).toBe(4)
})
```

Example 3 (ts):
```ts
import { it } from 'vitest'

it.concurrent('math is easy', ({ expect }) => {
  expect(2 + 2).toMatchInlineSnapshot()
})

it.concurrent('math is hard', ({ expect }) => {
  expect(2 * 2).toMatchInlineSnapshot()
})
```

Example 4 (ts):
```ts
function skip(note?: string): never
function skip(condition: boolean, note?: string): void
```

---

## Extending Matchers

**URL:** llms-txt#extending-matchers

**Contents:**
  - `isNot`
  - `promise`
  - `equals`
  - `utils`
  - `currentTestName`
  - `testPath`

Since Vitest is compatible with both Chai and Jest, you can use either the `chai.use` API or `expect.extend`, whichever you prefer.

This guide will explore extending matchers with `expect.extend`. If you are interested in Chai's API, check [their guide](https://www.chaijs.com/guide/plugins/).

To extend default matchers, call `expect.extend` with an object containing your matchers.

If you are using TypeScript, you can extend default `Assertion` interface in an ambient declaration file (e.g: `vitest.d.ts`) with the code below:

::: tip
Since Vitest 3.2, you can extend the `Matchers` interface to have type-safe assertions in `expect.extend`, `expect().*`, and `expect.*` methods at the same time. Previously, you had to define separate interfaces for each of them.
:::

::: warning
Don't forget to include the ambient declaration file in your `tsconfig.json`.
:::

The return value of a matcher should be compatible with the following interface:

::: warning
If you create an asynchronous matcher, don't forget to `await` the result (`await expect('foo').toBeFoo()`) in the test itself::

The first argument inside a matcher's function is the received value (the one inside `expect(received)`). The rest are arguments passed directly to the matcher.

Matcher function has access to `this` context with the following properties:

Returns true, if matcher was called on `not` (`expect(received).not.toBeFoo()`).

If matcher was called on `resolved/rejected`, this value will contain the name of modifier. Otherwise, it will be an empty string.

This is a utility function that allows you to compare two values. It will return `true` if values are equal, `false` otherwise. This function is used internally for almost every matcher. It supports objects with asymmetric matchers by default.

This contains a set of utility functions that you can use to display messages.

`this` context also contains information about the current test. You can also get it by calling `expect.getState()`. The most useful properties are:

### `currentTestName`

Full name of the current test (including describe block).

Path to the current test.

---
url: /advanced/reporters.md
---

**Examples:**

Example 1 (ts):
```ts
expect.extend({
  toBeFoo(received, expected) {
    const { isNot } = this
    return {
      // do not alter your "pass" based on isNot. Vitest does it for you
      pass: received === 'foo',
      message: () => `${received} is${isNot ? ' not' : ''} foo`
    }
  }
})
```

Example 2 (unknown):
```unknown

```

Example 3 (unknown):
```unknown
:::

::: tip
Since Vitest 3.2, you can extend the `Matchers` interface to have type-safe assertions in `expect.extend`, `expect().*`, and `expect.*` methods at the same time. Previously, you had to define separate interfaces for each of them.
:::

::: warning
Don't forget to include the ambient declaration file in your `tsconfig.json`.
:::

The return value of a matcher should be compatible with the following interface:
```

Example 4 (unknown):
```unknown
::: warning
If you create an asynchronous matcher, don't forget to `await` the result (`await expect('foo').toBeFoo()`) in the test itself::
```

---

## Example for splitting tests on 32 CPU to 4 shards.

**URL:** llms-txt#example-for-splitting-tests-on-32-cpu-to-4-shards.

---

## Test API Reference

**URL:** llms-txt#test-api-reference

**Contents:**
- test
  - test.extend {#test-extended}
  - test.skip
  - test.skipIf
  - test.runIf
  - test.only

The following types are used in the type signatures below

When a test function returns a promise, the runner will wait until it is resolved to collect async expectations. If the promise is rejected, the test will fail.

::: tip
In Jest, `TestFunction` can also be of type `(done: DoneCallback) => void`. If this form is used, the test will not be concluded until `done` is called. You can achieve the same using an `async` function, see the [Migration guide Done Callback section](/guide/migration#done-callback).
:::

You can define options by chaining properties on a function:

But you can also provide an object as a second argument instead:

They both work in exactly the same way. To use either one is purely a stylistic choice.

Note that if you are providing timeout as the last argument, you cannot use options anymore:

However, you can provide a timeout inside the object:

`test` defines a set of related expectations. It receives the test name and a function that holds the expectations to test.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds, and can be configured globally with [testTimeout](/config/#testtimeout)

### test.extend {#test-extended}

* **Alias:** `it.extend`

Use `test.extend` to extend the test context with custom fixtures. This will return a new `test` and it's also extendable, so you can compose more fixtures or override existing ones by extending it as you need. See [Extend Test Context](/guide/test-context.html#test-extend) for more information.

* **Alias:** `it.skip`

If you want to skip running certain tests, but you don't want to delete the code due to any reason, you can use `test.skip` to avoid running them.

You can also skip test by calling `skip` on its [context](/guide/test-context) dynamically:

Since Vitest 3.1, if the condition is unknown, you can provide it to the `skip` method as the first arguments:

* **Alias:** `it.skipIf`

In some cases you might run tests multiple times with different environments, and some of the tests might be environment-specific. Instead of wrapping the test code with `if`, you can use `test.skipIf` to skip the test whenever the condition is truthy.

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

* **Alias:** `it.runIf`

Opposite of [test.skipIf](#test-skipif).

::: warning
You cannot use this syntax when using Vitest as [type checker](/guide/testing-types).
:::

* **Alias:** `it.only`

Use `test.only` to only run certain tests in a given suite. This is useful when debugging.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds, and can be configured globally with [testTimeout](/config/#testtimeout).

Sometimes it is very useful to run `only` tests in a certain file, ignoring all other tests from the whole test suite, which pollute the output.

In order to do that run `vitest` with specific file containing the tests in question.

**Examples:**

Example 1 (ts):
```ts
type Awaitable<T> = T | PromiseLike<T>
type TestFunction = () => Awaitable<void>

interface TestOptions {
  /**
   * Will fail the test if it takes too long to execute
   */
  timeout?: number
  /**
   * Will retry the test specific number of times if it fails
   *
   * @default 0
   */
  retry?: number
  /**
   * Will repeat the same test several times even if it fails each time
   * If you have "retry" option and it fails, it will use every retry in each cycle
   * Useful for debugging random failings
   *
   * @default 0
   */
  repeats?: number
}
```

Example 2 (ts):
```ts
import { test } from 'vitest'

test.skip('skipped test', () => {
  // some logic that fails right now
})

test.concurrent.skip('skipped concurrent test', () => {
  // some logic that fails right now
})
```

Example 3 (ts):
```ts
import { test } from 'vitest'

test('skipped test', { skip: true }, () => {
  // some logic that fails right now
})

test('skipped concurrent test', { skip: true, concurrent: true }, () => {
  // some logic that fails right now
})
```

Example 4 (ts):
```ts
import { test } from 'vitest'

// ✅ this works
test.skip('heavy test', () => {
  // ...
}, 10_000)

// ❌ this doesn't work
test('heavy test', { skip: true }, () => {
  // ...
}, 10_000)
```

---

## In Vitest v4 the math.test.ts will run automatically.

**URL:** llms-txt#in-vitest-v4-the-math.test.ts-will-run-automatically.

$ vitest --standalone math.test.ts
json [package.json]
{
  "scripts": {
    "test:dev": "vitest --standalone"
  }
}
bash [CLI]

**Examples:**

Example 1 (unknown):
```unknown
This allows users to create re-usable `package.json` scripts for standalone mode.

::: code-group
```

Example 2 (unknown):
```unknown

```

---
