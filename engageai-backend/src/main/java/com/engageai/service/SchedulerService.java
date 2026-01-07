package com.engageai.service;

import com.engageai.model.Campaign;
import com.engageai.repository.CampaignRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SchedulerService {
    private final CampaignRepository campaignRepo;

    // Runs every minute and posts any scheduled campaigns that are due (mock)
    @Scheduled(fixedRate = 60000)
    public void checkAndPost() {
        List<Campaign> due = campaignRepo.findByStatusAndScheduledAtBefore("SCHEDULED", LocalDateTime.now());
        for (Campaign c : due) {
            c.setStatus("POSTED");
            campaignRepo.save(c);
            System.out.println("Auto-posted campaign id=" + c.getId() + " platform=" + c.getPlatform());
        }
    }
}
