<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use app\Models\User;
use app\Models\Playlist;


class PlaylistuserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user1=User::find(1);
        $user2=User::find(2);
        $user3=User::find(3);

        $playlist1=Playlist::find(1);
        $playlist2=Playlist::find(2);
        $playlist3=Playlist::find(3);

        $user1->playlist()->attach([$playlist1->id,$playlist2->id]);
        $user2->playlist()->attach([$playlist1->id,$playlist3->id]);
        $user3->playlist()->attach([$playlist1->id,$playlist2->id]);
    }
}
