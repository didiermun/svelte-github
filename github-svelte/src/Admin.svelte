
<script>
    import { onMount } from "svelte";
    const baseUrl = "http://localhost:4000/employees";
    let posts = [];
    onMount(async () => {
      let res = await fetch(baseUrl);
      posts = await res.json();
      console.log(posts);
    });
  </script>
  <section class="mt-5">
    <div class="container">
      <div class="row">
        {#if posts.length === 0}
          <p>Loading</p>
        {:else}
          {#each posts as post}
            <div class="col-md-4">
              <div class="card">
              <div class="card-header">{post.fname}  {post.lname}</div>
                <div class="card-body">
                  <h5 class="card-title">{post.email}</h5>
                  <p class="card-text">{post.gender}</p>
                  <button class="btn btn-info">Edit</button>
                  <button class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </section>