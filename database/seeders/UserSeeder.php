<?php

namespace Database\Seeders;

use App\Models\Organisation;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Env;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate([
            'organisation_id' => Organisation::firstWhere('name', env('SUPER_ADMIN_ORGANISATION'))->id,
            'name' => env('SUPER_ADMIN_NAME'),
            'email' => env('SUPER_ADMIN_EMAIL'),
            'password' => bcrypt(env('SUPER_ADMIN_PASSWORD')),
        ]);
    }
}
