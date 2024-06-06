## Apwriter
- for backend

## TinyMCE
- text editor

## html-react-parser

## React Hook Form


# DEPENDENCIES
- npm || bun
- redux-loolkit
- react router dom
- appwrite
- tinymce
- html-react-parser
- react-hook-form
- `npm i @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form`



# STEPS
- Create `.env` file and add this thile to `.gitignore`
- access `.env` file

# working with database

```jsx
async getPosts(queries = [Query.equal("status","active")]){
    try {
      return await this.databases.listDocuments(
        donf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
        100, // pagination
        0, // result
        "createdAt",
      )
    } catch (error) {
      console.log("Appwite serve :: createPosts :: error",error);
      return false;
    }
  }

  // or

  async getPosts(){
    try {
      return await this.databases.listDocuments(
        donf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [
          Query.equal("status","active"),
          Query.greaterThan('year', 1999)
        ]
      )
    } catch (error) {
      console.log("Appwite serve :: createPosts :: error",error);
      return false;
    }
  }
```