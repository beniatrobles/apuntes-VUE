<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();
        $this->call(PodcastSeeder::class);
        $this->call(PlaylistSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(SongsSeeder::class);
        $this->call(PlaylistuserSeeder::class);
        $this->call(PodcastuserSeeder::class);
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
