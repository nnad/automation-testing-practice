## In terms of the different testing categories that describe the scope of the test, how
would you describe the type of test you have just written?

I implemented the end-to-end test, this test simulates user scenario ‘Add item to cart’ and user‘s interaction with the app interface. 

The advantage is proximity to the real scenario, checking the interaction of different
application parts (backend and frontend). An automatic test is faster than a manual test. 
It is not necessary to know the source code for the test implementation.

The main disadvantage is that these tests can be slow and unstable due to interface interaction.
The tests depend on the stability of the backend. Despite the interaction with the interface, this type of testing refers more
to functional testing and does not include checking the correctness of the displaying of elements and styles.

## Short summary of the pros and cons of each of them.

**Unit tests** check various methods in the source code.
| Pros  | Cons |
| ------------- | ------------- |
| It is checking small parts of the code for the expected result | It checks the parts separately, which does not guarantee that there will be no problems during an interaction.  |
| Fast implementation time | |
|  In case of new code changes, unit tests can find a problem at the development stage |  |

**Integration testing** checks the interaction of different code components. 
| Pros  | Cons |
| ------------- | ------------- |
| It checks the interaction of different methods | It is more coupling (not resistant to code changes) |
| Tests are closer to the user scenario than unit tests |  Tests have stubs, which does not make them close to a real-life scenario. |
