<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Podcast;

class PodcastuserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

        public function run(): void
        {
            $user1=User::find(1);
            $user2=User::find(2);
            $user3=User::find(3);

            $podcast1=Podcast::find(1);
            $podcast2=Podcast::find(2);
            $podcast3=Podcast::find(3);

            $user1->podcast()->attach([$podcast1->id,$podcast2->id]);
            $user2->podcast()->attach([$podcast1->id,$podcast3->id]);
            $user3->podcast()->attach([$podcast1->id,$podcast2->id]);
        }

}
