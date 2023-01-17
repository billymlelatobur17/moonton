<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanSeeder extends Seeder
{
    public function run()
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 1000,
                'active-period_in_months' => 1,
                'features' => json_encode([
                    'HD',
                    'Ultra HD',
                    '4 Screens',
                ], JSON_THROW_ON_ERROR),
            ],
            [
                'name' => 'Premium',
                'price' => 2000,
                'active-period_in_months' => 6,
                'features' => json_encode([
                    'HD',
                    'Ultra HD',
                    '4 Screens',
                    'Download',
                    'Watch Offline',
                    'No Ads',
                ], JSON_THROW_ON_ERROR),
            ],
        ];

        SubscriptionPlan :: insert($subscriptionPlans);
    }
}
