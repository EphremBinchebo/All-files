package com.engageai.repository;

import com.engageai.model.Campaign;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.time.LocalDateTime;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {
    List<Campaign> findByUserId(Long userId);
    List<Campaign> findByStatusAndScheduledAtBefore(String status, LocalDateTime time);
}
