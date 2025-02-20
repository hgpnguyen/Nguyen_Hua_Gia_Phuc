<!-- GETTING STARTED -->
## About The Project
A backend server developed with TypeScript that allows user to create, update, delete, and view items.
### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/hgpnguyen/Nguyen_Hua_Gia_Phuc.git
   ```
2. **Install required packages:**
    ```sh
    cd Nguyen_Hua_Gia_Phuc/src/problem5
    npm install
    ```
3. **Start the server:**
    ```sh
    npm run dev
    ```

## Usage
Endpoint for creating, viewing, and filtering items:
```sh
/items/?[status_filter]
```
1. `[status_filter]`(optional): Filters items by category.

### Request Method
| Method   | Description                              |
| -------- | ---------------------------------------- |
| `GET`    | Retrieve a list of filtered items. |
| `POST`   | Create a new item. |

### Examples
| Method   | URL                                   | Description                              |
| -------- | --------------------------------------| ---------------------------------------- |
| `GET`    | `/items/`                             | Retrieve all items.                     |
| `POST`   | `/items/`                             | Create a new item.                       |
| `GET`    | `/items/?category=electric`           | Retrieve all electric item.                       |

Endpoint for viewing, updating, and deleting a specific item:
```sh
/items/{item_id}/
```
- `{item_id}`: The ID of the item.

### Request Method
| Method   | Description                              |
| -------- | ---------------------------------------- |
| `GET`    | Retrieve a single item. |
| `PUT`   | Update a item. |
| `DELETE`| Delete a item.

### Examples
| Method   | URL                                   | Description                               |
| -------- | --------------------------------------| ------------------------------------------|
| `GET`    | `/items/1/`                           | Retrieve item #1.                         |
| `PUT`    | `/items/2/`                           | Updated item #2.                  |
| `DELETE` | `/items/3/`                           | Deleted item #3.                          |