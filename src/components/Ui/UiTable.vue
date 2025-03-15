<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="text-h6">Table</span>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="data.headers"
          :items="data.items"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>My Table</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
  const data = ref({
    search: "",
    headers: [
      { text: "Name", value: "name" },
      { text: "Age", value: "age" },
      { text: "Country", value: "country" },
    ],
    items: [
      { name: "John Doe", age: 30, country: "USA" },
      { name: "Jane Smith", age: 25, country: "Canada" },
      { name: "Sam Brown", age: 35, country: "UK" },
    ],
  });
</script>

<style scoped></style>