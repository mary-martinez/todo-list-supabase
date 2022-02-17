// IMPORT MODULES under test here:
import { renderTodo } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="complete todo"><p>Pet the cats</p></div>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTodo({
        complete: true,
        created_at: "2022-02-16T20:44:42+00:00",
        id: 1,
        todo: "Pet the cats",
        user_id: "81f7b3f0-c985-43ab-a1dd-d879667dabd1"
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
